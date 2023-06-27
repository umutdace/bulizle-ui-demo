<template>
    <p>Hesabınız aktif edildi</p>
</template>

<script>
export default {
    data() {
        return {
            status: null
        }
    },
    created() {
        this.CheckToken();
        var mail = this.$route.query.email;
        fetch(this.baseUrl + "api/UserActive?email=" + mail, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok){
                this.ShowSuccessWithLocation("Başarılı !", "Hesabınız onaylandı artık giriş yapabilirsiniz.", "/login");
                return response.json();
            }
            else
                window.location.href = '/errorpage'
        });

    },
    methods: {
        CheckToken: async function () {
            var token = this.$route.query.token;
            if (token == null || token.length < 32)
                window.location.href = '/errorpage';
            fetch(this.baseUrl + "api/TokenCheck?token=" + token, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                if (response.ok)
                    return response.json();
                else
                    window.location.href = '/errorpage'
            })
                .catch(() => {
                    window.location.href = '/errorpage'
                });
        }
    }
}
</script>