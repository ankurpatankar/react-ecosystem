import { expect } from 'chai';
import { getCompletedTodos } from '.';

describe('the getCompletedTodos selector', () => {
    it('returns only completed todos', () => {
        const fakeTodos = [
            { text: 'Say hello', isCompleted: true },
            { text: 'say Goodbye', isCompleted: false },
            { text: 'climb everest', isCompleted: false },
        ];
        const expected = [{ text: 'Say hello', isCompleted: true }];
        // getCompletedTodos.resultFunc takes arguments which are final data we pass to the selector's final function
        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});