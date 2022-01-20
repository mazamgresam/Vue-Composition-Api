<template>
  <div class="flex justify-between">
    <div>
      <h1 class="font-bold text-xl m-3">Luas Trapesium</h1>
      <h3>½ × t( AB + CD )</h3>
      <form
        class="flex flex-col border-2 border-blue-200 h-3/5 justify-center mx-auto py-2 rounded"
      >
        <label class="mb-3 font-semibold" for="tinggi"
          >Tinggi:
          <input
            class="w-20"
            v-model="tinggi"
            placeholder=" Number"
            type="number"
            name="alas"
          />
        </label>
        <label class="font-semibold mb-3 ml-6" for="ab"
          >AB:
          <input
            class="w-20"
            v-model="ab"
            placeholder=" Number"
            type="ab"
            name="tinggi"
          />
        </label>
        <label class="font-semibold ml-6" for="cd"
          >CD:
          <input
            class="w-20"
            v-model="cd"
            placeholder=" Number"
            type="cd"
            name="tinggi"
          />
        </label>
      </form>
      <h3 v-show="luas >= 0" class="font-semibold my-2">
        Luas Trapesiumnya adalah = {{ luas }}
      </h3>
    </div>

    <div>
      <h1 class="font-bold text-xl m-3">Keliling Trapesium</h1>
      <h3>AB + BC + CD + DA</h3>
      <form
        class="flex flex-col border-2 border-blue-200 h-3/5 justify-center mx-auto py-2 rounded"
      >
        <label class="mb-1 font-semibold" for="ab"
          >AB:
          <input
            class="w-20"
            v-model="ab"
            placeholder=" Number"
            type="number"
            name="ab"
          />
        </label>
        <label class="font-semibold mb-1" for="bc"
          >BC:
          <input
            class="w-20"
            v-model="bc"
            placeholder=" Number"
            type="number"
            name="bc"
          />
        </label>
        <label class="mb-1 font-semibold" for="alas"
          >CD:
          <input
            class="w-20"
            v-model="cd"
            placeholder=" Number"
            type="number"
            name="cd"
          />
        </label>
        <label class="font-semibold" for="tinggi"
          >DA:
          <input
            class="w-20"
            v-model="da"
            placeholder=" Number"
            type="number"
            name="da"
          />
        </label>
      </form>
      <h3 v-show="keliling >= 0" class="font-semibold my-2">
        Luas Trapesiumnya adalah = {{ keliling }}
      </h3>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Home",
  setup() {
    const tinggi = ref();
    const ab = ref();
    const bc = ref();
    const cd = ref();
    const da = ref();
    const luas = computed(
      () =>
        0.5 *
        parseFloat(tinggi.value) *
        (parseFloat(ab.value) + parseFloat(cd.value))
    );
    const keliling = computed(
      () =>
        parseFloat(ab.value) +
        parseFloat(bc.value) +
        parseFloat(cd.value) +
        parseFloat(da.value)
    );
    return {
      tinggi,
      ab,
      cd,
      luas,
      keliling,
      bc,
      da,
    };
  },
};
</script>
