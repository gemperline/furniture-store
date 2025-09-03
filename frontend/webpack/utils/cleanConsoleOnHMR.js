/* eslint-disable no-undef */
if (IS_DEV_SERVER) {
    if (module.hot) {
        module.hot.accept();
        module.hot.addStatusHandler((status) => {
            //eslint-disable-next-line no-console
            if (status === 'prepare') console.clear();
        });
    }
}