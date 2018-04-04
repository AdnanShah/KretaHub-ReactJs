import {all, call, put, takeEvery} from 'redux-saga/effects';
import {fetchContactsSuccess, showContactMessage} from 'actions/Contact';
import {database} from 'firebase/firebase';
import {FETCH_ALL_CONTACT} from 'constants/ActionTypes';

const getContacts = async () =>
    await database.ref('prod/contacts').once('value')
        .then((snapshot) => {
            const contacts = [];
            snapshot.forEach((rawData) => {
                contacts.push(rawData.val());
            });
            return contacts;
        })
        .catch(error => error);


function* fetchContactRequest() {
    try {
        const fetchedContact = yield call(getContacts);
        yield put(fetchContactsSuccess(fetchedContact));
    } catch (error) {
        yield put(showContactMessage(error));
    }
}


export default function* rootSaga() {
    yield all([takeEvery(FETCH_ALL_CONTACT, fetchContactRequest)]);
}