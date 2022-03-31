<template>
	<div class="component-step">
		<div class="bar">
			<div
				v-for="(item, index) in steps"
				:key="`step-number-${index + 1}`"
				:class="{
					'step': true,
					'active': index + 1 <= currentStep,
					'start': index === 0,
					'end': index === steps.length
				}"
			>
				<div class="indicator">
					<div v-if="index > 0" class="line" />
					<div class="content">
						<i v-if="index + 1 <= currentStep" class="fas fa-check" />
					</div>
				</div>
				<div class="title">
					{{ item }}
				</div>
			</div>
		</div>

		<div v-if="hasDescription" class="description">
			<div class="not-done">
				<div class="icon-des" />
				<span>{{ textNotDone }}</span>
			</div>
			<div class="done">
				<div class="icon-des">
					<i class="fas fa-check" />
				</div>
				<span>{{ textDone }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'VStep',
    props: {
        steps: {
            type: Array,
            require: true,
            default: function() {
                return [];
            },
            validator: function(steps = []) {
                if (!Array.isArray(steps)) {
                    return false;
                }

                let idx = 0;
                let count = 0;
                const len = steps.length;

                while (idx < len) {
                    if (typeof steps[idx] === 'string') {
                        count = count + 1;
                    }

                    idx++;
                }

                return count === len;
            },
        },
        currentStep: {
            type: Number,
            require: true,
            default: function() {
                return 0;
            },
            validator: function(currentStep) {
                if (!isNaN(currentStep)) {
                    return true;
                }

                return false;
            },
        },
        hasDescription: {
            type: Boolean,
            require: false,
            default: function() {
                return true;
            },
            validator: function(hasDescription) {
                return [true, false].includes(hasDescription);
            },
        },
        textNotDone: {
            type: String,
            require: false,
            default: function() {
                return this.$t('STEP.NOT_DONE');
            },
            validator: function(textNotDone) {
                return typeof textNotDone === 'string';
            },
        },
        textDone: {
            type: String,
            require: false,
            default: function() {
                return this.$t('STEP.DONE');
            },
            validator: function(textDone) {
                return typeof textDone === 'string';
            },
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.component-step {
    .bar {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        padding: 10px;
        width: 100%;

        justify-content: center;
    }

    .step {
        display: flex;
        flex-direction: column;
    }

    .step.start > .indicator{
        align-self: flex-end;
    }

    .indicator {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .line {
        display: inline-flex;
        width: 150px;
        height: 5px;
        background-color: $charade;
    }

    .content {
        display: inline-flex;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-color: $charade;
        color: white;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }

    .step.active .content,
    .step.active .line {
        background-color: $green-haze;
    }

    .title {
        display: inline-flex;
        align-self: flex-end;
        text-transform: capitalize;
        width: 150px;
        position: relative;
        right: -23%;
        justify-content: center;
        text-align: center;

        margin-top: 10px;
        font-weight: 600;
    }

    .step.start > .title {
        right: -30%;
    }

    .description {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: flex-end;
        position: relative;
        right: -35px;

        .not-done {
            display: flex;

            .icon-des {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: $charade;
            }

            span {
                font-weight: 600;
                margin-left: 10px;
            }
        }

        .done {
            display: flex;
            margin-left: 20px;

            .icon-des {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                line-height: 20px;
                text-align: center;
                font-size: 10px;
                color: $white;
                background-color: $green-haze;
            }

            span {
                font-weight: 600;
                margin-left: 10px;
            }
        }
    }
}
</style>
