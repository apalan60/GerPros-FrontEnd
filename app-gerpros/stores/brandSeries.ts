import { useState } from '#app';

export function useBrandSeriesStore() {
  const brandSeries = useState('brandSeries', () => []);
  async function fetchBrands() {
    try {
      const { data } = await useApiFetch('/Brands');
      if (data) {
        brandSeries.value = data;
      }
      else {
        console.error('未取得有效的品牌資料');
      }
    }
    catch (error) {
      console.error('無法獲取品牌資料', error);
    }
  }

  return {
    brandSeries: brandSeries,
  };
}
