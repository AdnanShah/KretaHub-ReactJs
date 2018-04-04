import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {fetchTodosConversationSuccess, fetchTodosSuccess, showTodoMessage} from 'actions/ToDo';
import {database} from 'firebase/firebase';
import {FETCH_ALL_TODO, FETCH_ALL_TODO_CONVERSATION} from 'constants/ActionTypes';

const getTodos = async () =>
    await database.ref('prod/todo/todos').once('value')
        .then((snapshot) => {
            const todos = [];
            snapshot.forEach((rawData) => {
                const todo = rawData.val();

                // change object to array
                const labels = [];
                if (todo.labels) {
                    todo.labels.forEach((label) =>
                        labels.push(label)
                    );
                }

                todo.labels = labels;
                todos.push(todo);
            });
            return todos;
        })
        .catch(error => error);

const getTodosConversation = async () =>
    await database.ref('prod/todo/conversation').once('value')
        .then((snapshot) => {
            const conversations = [];
            snapshot.forEach((rawData) => {
                const conversation = rawData.val();

                // change object to array
                const conversationDatas = [];
                if (conversation.conversationData) {
                    conversation.conversationData.forEach((conversationData) =>
                        conversationDatas.push(conversationData)
                    );
                }
                conversation.conversationData = conversationDatas;
                conversations.push(conversation);
            });

            return conversations;
        })
        .catch(error => error);


function* fetchTodoRequest() {
    try {
        const fetchedTodo = yield call(getTodos);
        yield put(fetchTodosSuccess(fetchedTodo));
    } catch (error) {
        yield put(showTodoMessage(error));
    }
}

function* fetchTodoConversationRequest() {
    try {
        const fetchedTodoConversation = yield call(getTodosConversation);
        yield put(fetchTodosConversationSuccess(fetchedTodoConversation));
    } catch (error) {
        yield put(showTodoMessage(error));
    }
}

export function* fetchTodos() {
    yield takeEvery(FETCH_ALL_TODO, fetchTodoRequest);
}

export function* fetchTodoConversation() {
    yield takeEvery(FETCH_ALL_TODO_CONVERSATION, fetchTodoConversationRequest);
}

export default function* rootSaga() {
    yield all([fork(fetchTodoConversation), fork(fetchTodos)]);
}