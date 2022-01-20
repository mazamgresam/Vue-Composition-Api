<template>
  <div class="flex justify-between">
    <div>
      <h1 class="font-bold text-xl m-2">Luas Belah Ketupat</h1>
      <h3>½ × d1 × d2</h3>
      <form
        class="flex flex-col border-2 border-blue-200 w-4/5 mx-auto py-2 rounded"
      >
        <label class="mb-1 ml-1 font-semibold" for="d1"
          >d1:
          <input
            class="w-20"
            v-model="d1"
            placeholder=" Number"
            type="number"
            name="d1"
          />
        </label>
        <label class="font-semibold" for="d2"
          >d2:
          <input
            class="w-20"
            v-model="d2"
            placeholder=" Number"
            type="number"
            name="d2"
          />
        </label>
      </form>
      <h3 v-show="luas >= 0" class="font-semibold my-2">
        Luas Belah Ketupatnya adalah = {{ luas }}
      </h3>
    </div>

    <div>
      <h1 class="font-bold text-xl m-2">Keliling Belah Ketupat</h1>
      <h3>4 × S</h3>
      <form
        class="flex flex-col justify-center border-2 border-blue-200 w-4/5 mx-auto py-2 rounded h-2/5"
      >
        <label class="font-semibold" for="sisi"
          >S:
          <input
            class="w-20"
            v-model="sisi"
            placeholder=" Number"
            type="number"
            name="sisi"
          />
        </label>
      </form>
      <h3 v-show="keliling >= 0" class="font-semibold my-2">
        Keliling Belah Ketupatnya adalah = {{ keliling }}
      </h3>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Home",
  setup() {
    const sisi = ref();
    const d1 = ref();
    const d2 = ref();
    const luas = computed(
      () => parseFloat(d1.value) * parseFloat(d2.value) * 0.5
    );
    const keliling = computed(() => 4 * parseFloat(sisi.value));

    return {
      sisi,
      luas,
      d1,
      d2,
      keliling,
    };
  },
};
</script>
