import { ref } from 'vue';
import { deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { dbOrdersRef } from '@/firebase';

export default function useOrders () {
    const orders = ref([]);
    const ordersMessage = ref('');

    async function getOrders() {
        ordersMessage.value = '';
        try {
            const queryData = query(dbOrdersRef,  orderBy("createdAt"));
            const orderDocs = await getDocs(queryData);
            orders.value = orderDocs.docs.map((orderDoc) => ({
                id: orderDoc.id,
                ...orderDoc.data(),
            }));
        } catch (error) {
            ordersMessage.value = 'Unable to load orders, please refresh your page.';
        }
    }

    async function deleteOrder (id) {
        if (!window.confirm("Are you sure you want to delete this order?")) {
            return
        }
        try {
            ordersMessage.value = "";
            const order = doc(dbOrdersRef, id);
            await deleteDoc(order);
            await getOrders();
        } catch (error) {
            ordersMessage.value = "Unable to delete order, please try again.";
        }

    }

    return {
        orders,
        getOrders,
        deleteOrder,
        ordersMessage,
    }

}