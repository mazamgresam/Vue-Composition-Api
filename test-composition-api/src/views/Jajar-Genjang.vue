<template>
  <div class="flex justify-between">
    <div>
      <h1 class="font-bold text-xl m-3">Luas Jajar Genjang</h1>
      <h3>a × t</h3>
      <form
        class="flex flex-col border-2 border-blue-200 w-4/5 mx-auto py-2 rounded"
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
      <h3 v-show="luas >= 0" class="font-semibold my-2">
        Luas Jajar Genjangnya adalah = {{ luas }}
      </h3>
    </div>

    <div>
      <h1 class="font-bold text-xl m-3">Keliling Jajar Genjang</h1>
      <h3>2 ×( a+b )</h3>
      <form
        class="flex flex-col border-2 border-blue-200 w-4/5 mx-auto py-2 rounded"
      >
        <label class="mb-1 font-semibold" for="a"
          >A:
          <input
            class="w-20"
            v-model="a"
            placeholder=" Number"
            type="number"
            name="a"
          />
        </label>
        <label class="font-semibold" for="b"
          >B:
          <input
            class="w-20"
            v-model="b"
            placeholder=" Number"
            type="number"
            name="b"
          />
        </label>
      </form>
      <h3 v-show="keliling >= 0" class="font-semibold my-2">
        Luas Jajar Genjang adalah = {{ keliling }}
      </h3>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Home",
  setup() {
    const alas = ref();
    const tinggi = ref();
    const a = ref();
    const b = ref();
    const luas = computed(
      () => parseFloat(alas.value) * parseFloat(tinggi.value)
    );
    const keliling = computed(
      () => 2 * (parseFloat(a.value) + parseFloat(b.value))
    );

    return {
      alas,
      tinggi,
      a,
      b,
      luas,
      keliling,
    };
  },
};
</script>
