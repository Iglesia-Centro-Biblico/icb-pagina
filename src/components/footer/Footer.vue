<template>
    <footer id="footer" class="icb-footer">
        <div class="icb-footer__logos">
            <img class="icb-footer__logos-icb" src="/logo-completo-blanco.svg" height="90" alt="Logo Footer">
            <div class="icb-footer__logos-social-media">
                <a href="https://www.facebook.com/IglesiaUCBPdu/" target="_blank">
                    <img src="@/assets/icons/facebook.svg" width="50" height="50" alt="facebook" />
                </a>
                <a href="https://www.instagram.com/iglesiau.c.bpdu" target="_blank">
                    <img src="@/assets/icons/instagram.svg" width="50" height="50" alt="instagram" />
                </a>
                <a href="https://www.youtube.com/@iglesiacentrosbiblicospdu5791" target="_blank">
                    <img src="@/assets/icons/youtube.svg" width="50" height="50" alt="youtube" />
                </a>
            </div>
        </div>
        <p class="icb-footer__copyright">© 2023 Iglesia Centro Bíblico Paysandú</p>
    </footer>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.icb-footer {
    position: relative;
    width: 100%;
    height: 250px;
    background-color: $secondary;
    &__logos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding-bottom: 16px;
        &-icb {
            margin-bottom: 8px;
        }
        &-social-media {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;
            margin-top: 12px;
        }
    }
    &__copyright {
        position: absolute;
        bottom: 8px;
        width: 100%;
        font-size: 12px;
        color: #CCCCCC;
        justify-self: flex-end;
        text-align: center;
    }
    @include q-medium {
        height: 450px;
        bottom: 16px;
        &__logos {
            flex-direction: row;
            justify-content: space-around;
            align-self: center;
            &-icb {
                height: 150px;
            }
            &-social-media {
                gap: 16px;
                a img {
                    height: 130px;
                    width: 130px;
                }
            }
        }
        &__copyright {
            font-size: 24px;
        }
    }
}
</style>