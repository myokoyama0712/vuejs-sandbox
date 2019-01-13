<template>
<div>
  <div class="main-select-area">
    <select v-model="mainSelectValue">
      <option v-for="opt in mainOptionList" :key="opt.value"
              :value="opt.value"
              v-text="opt.label">
      </option>
    </select>
  </div>

  <div class="sub-select-area">
    <div v-show="mainSelectValue === 'name'">
      <select v-model="subFormValue.selectedName">
        <option v-for="nameOpt in nameOptionList" :key="nameOpt.value"
                :value="nameOpt.value"
                v-text="nameOpt.label">
        </option>
      </select>
    </div>
    <div v-show="mainSelectValue === 'age'">
      <select v-model="subFormValue.selectedAge">
        <option v-for="ageOpt in ageOptionList" :key="ageOpt.value"
                :value="ageOpt.value"
                v-text="ageOpt.label">
        </option>
      </select>
    </div>
    <div v-show="mainSelectValue === 'gender'">
      <select v-model="subFormValue.selectedGender">
        <option v-for="genderOpt in genderOptionList" :key="genderOpt.value"
                :value="genderOpt.value"
                v-text="genderOpt.label">
        </option>
      </select>
    </div>
  </div>

  <div class="data-options">
    <span>MAIN OPTION: {{ mainSelectValue }}</span><br>
    <span>SUB OPTION: {{ subFormValue }}</span><br>
  </div>
</div>
</template>

<script>
import constant from '@/constant.js'

export default {
  data() {
    return {
      mainSelectValue: 'name',
      subFormValue: {
        selectedName: '',
        selectedAge: '',
        selectedGender: '',
      },

      mainOptionList: constant.MAIN_OPTION_LIST,
      nameOptionList: constant.NAME_OPTION_LIST,
      ageOptionList: constant.AGE_OPTION_LIST,
      genderOptionList: constant.GENDER_OPTION_LIST,
    }
  },
}
</script>

<style scoped>
select {
  width: 100px;
}
</style>
