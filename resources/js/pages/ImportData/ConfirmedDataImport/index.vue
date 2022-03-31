<template>
	<b-overlay
		:show="overlay.show"
		:variant="overlay.variant"
		:opacity="overlay.opacity"
		:blur="overlay.blur"
		:rounded="overlay.sm"
	>
		<template #overlay>
			<div class="text-center">
				<b-icon icon="arrow-clockwise" font-scale="3" animation="spin" />
				<p style="margin-top: 10px;">{{ $t('OVERLAY.PLEASE_WAIT') }}</p>
			</div>
		</template>

		<div class="content-page">
			<div class="header-page">
				<vHeaderPage>{{ $t('PAGE_TITLE.CONFIRMED_DATA_IMPORT') }}</vHeaderPage>
			</div>

			<div class="confirmed-data-import">
				<div class="zone-import">
					<div class="zone-import__title">
						<span>{{ $t('PAGE_TITLE.CONFIRMED_DATA_IMPORT') }}</span>
					</div>
					<div class="zone-import__content">
						<div class="form-input">
							<input id="confirmed-data-import" type="file">
							<label for="file-name">{{ $t('PAGE_TITLE.CONFIRMED_DATA_IMPORT') }}</label>
							<b-input-group>
								<b-form-input
									id="file-name"
									v-model="FileName"
									:placeholder="$t('CONFIRMED_DATA_IMPORT.PLACEHOLDER_SELECT_FILE')"
									:readonly="true"
								/>
								<b-input-group-prepend>
									<b-button @click="clickInputFile()">{{ $t('CONFIRMED_DATA_IMPORT.BUTTON_BROWSE') }}</b-button>
								</b-input-group-prepend>
							</b-input-group>
						</div>
					</div>
				</div>
			</div>
			<div class="zone-control">
				<b-button>{{ $t('CONFIRMED_DATA_IMPORT.BUTTON_IMPORT') }}</b-button>
			</div>
		</div>
	</b-overlay>
</template>

<script>
import vHeaderPage from '@/components/atoms/vHeaderPage';

export default {
    name: 'ConfirmedDataImport',
    components: {
        vHeaderPage,
    },
    data() {
        return {
            overlay: {
                show: false,
                variant: 'light',
                opacity: 1,
                blur: '1rem',
                rounded: 'sm',
            },

            FileName: '',
            FileImport: null,
        };
    },
    methods: {
        clickInputFile() {
            const INPUT_FILE = document.getElementById('confirmed-data-import');

            INPUT_FILE.click();
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';
.content-page {
    min-height: calc(100vh - 90px);

    .confirmed-data-import {
        margin: 0 auto;
        margin-top: 80px;
        width: 90%;

        .zone-import {
            &__title {
                display: flex;
                background-color: $green-haze;
                color: $white;
                padding: 10px 15px;

                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;

                span {
                    font-weight: 500;
                }
            }

            &__content {
                border: 2px solid $black;
                border-top-color: $green-haze;

                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;

                .form-input {
                    input#confirmed-data-import {
                        display: none;
                    }

                    margin: 80px 30px 80px 30px;

                    label {
                        font-weight: 500;
                    }

                    button {
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;

                        background-color: $green-haze;

                        &:hover {
                            opacity: .5;
                            background-color: $green-haze !important;
                        }

                        &:active {
                            background-color: $green-haze !important;
                        }

                        &:focus {
                            background-color: $green-haze !important;
                        }
                    }
                }
            }
        }
    }

    .zone-control {
        text-align: center;
        margin-top: 50px;

        button {
            min-width: 150px;

            background-color: $green-haze;

            &:hover {
                opacity: .5;
                background-color: $green-haze !important;
            }

            &:active {
                background-color: $green-haze !important;
            }

            &:focus {
                background-color: $green-haze !important;
            }
        }
    }
}
</style>
