import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';
import { loadTodos } from ".";

describe('the loadTodos thunk', () => {
    it('Dispatches the correct actions in case of the success scenario', async () => {
        // The spy creates a fake function that keeps track of which arguments it was called with
        const fakeDispatch = sinon.spy();
        const fakeTodos = [{ text: '1' }, { text: '2' }];
        // When thunk tries to send get request it gets back fakeTodos than call actual API
        fetchMock.get('http://localhost:8080/todos', fakeTodos);

        const expectedfirstAction = {
            type: 'LOAD_TODOS_IN_PROGRESS',
        };
        const expectedSecondAction = {
            type: 'LOAD_TODOS_SUCCESS',
            payload: {
                todos: fakeTodos,
            },
        }

        await loadTodos()(fakeDispatch);

        // first argument that was passed during the first call to dispatch
        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedfirstAction);
        // the second action our thunk dispatched was with the fake results that we made our fake fetch return during the test
        // first argument that was passed during the second call to dispatch
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

        // restores fetchMock since we changed it above
        fetchMock.reset();
    });
})
