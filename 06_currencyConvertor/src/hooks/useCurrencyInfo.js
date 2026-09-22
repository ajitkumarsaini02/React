import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const normalizedCurrency = currency?.toUpperCase();
    if (!normalizedCurrency) return;

    fetch(`https://api.frankfurter.app/latest?from=${normalizedCurrency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates || {}))
      .catch(() => setData({}));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;