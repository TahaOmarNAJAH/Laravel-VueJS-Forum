<template>
<div>
    <v-menu offset-y>

        <template v-slot:activator="{ on, attrs }">
            <v-btn  icon v-bind="attrs" v-on="on">
                <div v-if="unreadCount > 0">
                    {{ unreadCount }}
                </div>
                <v-icon :color="color">mdi-bell</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="item in unread" :key="item.id">
                <router-link :to="item.path">
                    <v-list-item-title @click="readNotification(item)">{{ item.question }}</v-list-item-title>
                </router-link>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="item in read" :key="item.id">
                    <v-list-item-title >{{ item.question }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</div>
</template>

<script>
export default {
    name: "AppNotificatopn",
    data() {
        return {
            read: {},
            unread: {},
            unreadCount: 0,
        }
    },
    created() {
        if (User.loggedIn()) {
            this.getNotifications();
        }
    },
    computed:{
        color(){
            return this.unreadCount > 0 ? 'red' : 'grey-5' 
        }
    },
    methods: {
        getNotifications() {
            axios.post('/api/notifications').then(
                (response) => {
                    this.read = response.data.read;
                    this.unread = response.data.unread;
                    this.unreadCount = response.data.unread.length;

                }
            );
        },
        readNotification(notification){
            axios.post('/api/notification/markAsRead',{id:notification.id}).then(
                (response) => {
                    this.unread.splice(notification,1);
                    this.read.push(notification);
                    this.unreadCount--;
                }
            );
        }
    }
};
</script>

<style scoped>
</style>
