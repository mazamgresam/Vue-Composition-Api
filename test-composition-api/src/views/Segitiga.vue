<template>
  <div>
    <h1 class="font-bold text-xl m-3">Luas Segitiga</h1>
    <h3>½ × a × t</h3>
    <form
      class="flex flex-col border-2 border-blue-200 w-3/12 mx-auto py-2 rounded"
    >
      <label class="mb-1 ml-4 font-semibold" for="alas"
        >Alas:
        <input
          class="w-20"
          v-model="alas"
          placeholder=" Number"
          type="number"
          name="alas"
        />
      </label>
      <label class="font-semibold" for="tinggi"
        >Tinggi:
        <input
          class="w-20"
          v-model="tinggi"
          placeholder=" Number"
          type="number"
          name="tinggi"
        />
      </label>
    </form>
    <h3 v-show="luas >= 0" class="font-semibold">
      Luas Segitiganya adalah = {{ luas }}
    </h3>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Home",
  setup() {
    const alas = ref();
    const tinggi = ref();
    const luas = computed(
      () => parseFloat(alas.value) * parseFloat(tinggi.value) * 0.5
    );

    return {
      alas,
      tinggi,
      luas,
    };
  },
};
</script>
