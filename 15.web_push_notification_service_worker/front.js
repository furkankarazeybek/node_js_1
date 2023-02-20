
window.addEventListener('load',async()=> {   //sayfa yüklendiğinde
    const service=await navigator.serviceWorker.register('./worker.js');
    console.log('Service',service)
})
async function aboneOl() {
    const worker = await navigator.serviceWorker.ready
    const clientId=await worker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey : 'BBFS2xw0p1mMf1JvhCu1XMt3V7Zjlq4GHgK3nNr7pGB-UjeLysMPOwsD4U3xsDBCtca9GdtQr5fzHpp3I9asMhw'
    });

    console.log(JSON.stringify(clientId))
}


async function abonelikIptal() {
    const worker = await navigator.serviceWorker.ready
    const subscriber=await worker.pushManager.getSubscription();
    subscriber.unsubscribe();


}