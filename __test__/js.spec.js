it(`promise to await`, done => {
    async function promiseFunc() {

        const value = await new Promise(resolve => setTimeout(function () {
            resolve('foo');
        }, 300));

        expect(value).toBe('foo');
        done()

        expect(promise1).toBeInstanceOf(Promise);
        return promise1
    }
    promiseFunc()

});