import {all, call, put, takeEvery} from 'redux-saga/effects';
import {fetchMailsSuccess, showMailMessage} from 'actions/Mail';
import {database} from 'firebase/firebase';
import {FETCH_ALL_MAIL} from 'constants/ActionTypes';

const getMails = async () =>
    await database.ref('prod/mail').once('value')
        .then((snapshot) => {
            const mails = [];
            snapshot.forEach((rawData) => {
                const mail = rawData.val();

                // change object to array
                const labels = [];
                if (mail.labels) {
                    mail.labels.forEach((label) =>
                        labels.push(label)
                    );
                }

                // change object to array
                const tos = [];
                mail.to.forEach((to) =>
                    tos.push(to)
                );

                mail.to = tos;
                mail.labels = labels;
                mails.push(mail);
            });
            return mails;
        })
        .catch(error => error);


function* fetchMailRequest() {
    try {
        const fetchedMail = yield call(getMails);
        yield put(fetchMailsSuccess(fetchedMail));
    } catch (error) {
        yield put(showMailMessage(error));
    }
}


export default function* rootSaga() {
    yield all([takeEvery(FETCH_ALL_MAIL, fetchMailRequest)]);
}