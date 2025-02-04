import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const exchangeRates = {
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
    PKR: 280,
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    convertCurrency(value, currency);
  };

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);
    convertCurrency(amount, newCurrency);
  };

  const convertCurrency = (value, currency) => {
    if (!value) {
      setConvertedAmount("");
      return;
    }
    const rate = exchangeRates[currency] || 1;
    setConvertedAmount((value * rate).toFixed(2));
  };

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-y-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div className="text-xl font-medium text-black dark:text-white">
        Currency Converter
      </div>
      <input
        className="text-start p-2 font-semibold border w-full rounded-md"
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount in USD"
      />
      <select
        className="p-2 border font-semibold w-full rounded-md"
        value={currency}
        onChange={handleCurrencyChange}
      >
        <option value="EUR">Euro (EUR)</option>
        <option value="GBP">British Pound (GBP)</option>
        <option value="JPY">Japanese Yen (JPY)</option>
        <option value="PKR">Pakistani Rupee (PKR)</option>
      </select>
      <input
        className="text-start p-2 font-semibold border w-full rounded-md bg-gray-100"
        type="text"
        value={convertedAmount}
        placeholder="Converted amount"
        readOnly
      />
    </div>
  );
};

export default CurrencyConverter;
