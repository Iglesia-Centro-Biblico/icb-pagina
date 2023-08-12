<template>
    <footer id="footer" class="icb-footer">
        <div class="icb-footer__logos">
            <img class="icb-footer__logos-icb" src="/logo-completo-blanco.svg" height="50" alt="Logo Footer">
            <div class="icb-footer__logos-social-media">
            </div>
        </div>
        <p class="icb-footer__copyright">© 2023 Iglesia Centro Bíblico Paysandú</p>
    </footer>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.icb-footer {
    width: 100%;
    height: 200px;
    background-color: $secondary;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &__logos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        &__social-media {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    &__copyright {
        font-size: 12px;
        color: #CCCCCC;
        justify-self: flex-end;
        margin-bottom: 18px;
    }
}
</style>