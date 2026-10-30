"use client";
import { useEffect, useRef } from "react";
export function FinanceChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let disposed = false;
    let chart: { destroy: () => void } | undefined;
    import("chart.js/auto").then(({ default: Chart }) => {
      if (disposed || !ref.current) return;
      chart = new Chart(ref.current, {
        type: "line",
        data: {
          labels: [
            "۲۵ فروردین",
            "۲۷ فروردین",
            "۱ اردیبهشت",
            "۳ اردیبهشت",
            "۵ اردیبهشت",
            "۷ اردیبهشت",
            "۹ اردیبهشت",
            "۱۱ اردیبهشت",
            "۱۳ اردیبهشت",
            "۱۵ اردیبهشت",
            "۱۷ اردیبهشت",
            "۱۹ اردیبهشت",
            "۲۱ اردیبهشت",
            "۲۳ اردیبهشت",
          ],
          datasets: [
            {
              label: "درآمد",
              data: [
                2200000, 1800000, 2900000, 2400000, 3100000, 2600000, 2800000,
                2000000, 2700000, 2300000, 2500000, 1700000, 2600000, 2100000,
              ],
              borderColor: "#22c55e",
              tension: 0.4,
              pointRadius: 0,
            },
            {
              label: "هزینه",
              data: [
                800000, 1000000, 700000, 1200000, 900000, 750000, 800000,
                1100000, 600000, 1250000, 700000, 850000, 900000, 650000,
              ],
              borderColor: "#ef4444",
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: "top", align: "end" } },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { callback: (value) => `${Number(value) / 1000000}M` },
            },
          },
        },
      });
    });
    return () => {
      disposed = true;
      chart?.destroy();
    };
  }, []);
  return (
    <canvas
      ref={ref}
      id="financeChart"
      role="img"
      aria-label="نمودار درآمد و هزینه"
    />
  );
}
