import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const DataFlowDiagram = () => {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <CardTitle>System Architecture</CardTitle>
        <CardDescription>Data flow from IoT sensors through AI processing to predictions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-background rounded-lg p-4">
          <pre className="text-xs overflow-x-auto">
{`
┌─────────────────────────────────────────────────────────────────┐
│                        IoT Sensor Layer                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │  Soil    │  │   Temp   │  │ Humidity │  │   pH     │       │
│  │ Moisture │  │  Sensor  │  │  Sensor  │  │  Sensor  │       │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘       │
└───────┼─────────────┼─────────────┼─────────────┼──────────────┘
        │             │             │             │
        └─────────────┴─────────────┴─────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────┐
        │         Data Collection Gateway           │
        │  • Real-time data aggregation             │
        │  • Data validation & cleaning             │
        │  • Timestamp synchronization              │
        └───────────────────┬───────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────┐
        │         Feature Engineering               │
        │  • Normalize sensor readings              │
        │  • Calculate derived metrics              │
        │  • Time-series windowing                  │
        └───────────────────┬───────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────┐
        │          AI Processing Layer              │
        │                                           │
        │  ┌─────────────────────────────────────┐ │
        │  │   Recurrent Neural Network (RNN)    │ │
        │  │   • Sequential data analysis        │ │
        │  │   • Temporal pattern recognition    │ │
        │  └─────────────────────────────────────┘ │
        │                                           │
        │  ┌─────────────────────────────────────┐ │
        │  │   LightGBM Regressor                │ │
        │  │   • Gradient boosting               │ │
        │  │   • Feature importance analysis     │ │
        │  └─────────────────────────────────────┘ │
        │                                           │
        │  ┌─────────────────────────────────────┐ │
        │  │   Deep Neural Network (DNN)         │ │
        │  │   • Multi-layer processing          │ │
        │  │   • Non-linear relationship capture │ │
        │  └─────────────────────────────────────┘ │
        └───────────────────┬───────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────┐
        │        Ensemble & Prediction Fusion       │
        │  • Weighted model averaging               │
        │  • Confidence scoring                     │
        │  • Anomaly detection                      │
        └───────────────────┬───────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────┐
        │         Output & Visualization            │
        │  • Crop yield predictions                 │
        │  • Actionable recommendations             │
        │  • Real-time dashboard updates            │
        └───────────────────────────────────────────┘
`}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};
