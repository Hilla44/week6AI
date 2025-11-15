import { Header } from "@/components/Header";
import { SensorCard } from "@/components/SensorCard";
import { AIModelCard } from "@/components/AIModelCard";
import { DataFlowDiagram } from "@/components/DataFlowDiagram";
import { Droplets, Thermometer, Wind, Activity, Sun, Beaker } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const Index = () => {
  const sensors = [
    {
      name: "Soil Moisture",
      value: "65",
      unit: "%",
      status: "optimal" as const,
      icon: Droplets,
      trend: "stable" as const,
    },
    {
      name: "Temperature",
      value: "24",
      unit: "°C",
      status: "optimal" as const,
      icon: Thermometer,
      trend: "up" as const,
    },
    {
      name: "Humidity",
      value: "72",
      unit: "%",
      status: "optimal" as const,
      icon: Wind,
      trend: "down" as const,
    },
    {
      name: "Soil pH Level",
      value: "6.5",
      unit: "pH",
      status: "optimal" as const,
      icon: Beaker,
      trend: "stable" as const,
    },
    {
      name: "Light Intensity",
      value: "850",
      unit: "lux",
      status: "warning" as const,
      icon: Sun,
      trend: "up" as const,
    },
    {
      name: "NPK Levels",
      value: "78",
      unit: "ppm",
      status: "optimal" as const,
      icon: Activity,
      trend: "stable" as const,
    },
  ];

  const aiModels = [
    {
      modelName: "Recurrent Neural Network",
      modelType: "RNN",
      accuracy: 94.2,
      prediction: "4,850 kg/hectare",
      confidence: 92,
    },
    {
      modelName: "LightGBM Regressor",
      modelType: "Gradient Boosting",
      accuracy: 96.5,
      prediction: "4,920 kg/hectare",
      confidence: 96,
    },
    {
      modelName: "Deep Neural Network",
      modelType: "DNN",
      accuracy: 95.8,
      prediction: "4,885 kg/hectare",
      confidence: 94,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Smart Agriculture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary-foreground mb-2">
              Real-Time Agriculture Intelligence
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Powered by IoT sensors and advanced AI models
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Sensor Monitoring Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-2">IoT Sensor Network</h2>
            <p className="text-muted-foreground">Real-time monitoring of environmental conditions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sensors.map((sensor) => (
              <SensorCard key={sensor.name} {...sensor} />
            ))}
          </div>
        </section>

        {/* AI Predictions Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-2">AI Crop Yield Predictions</h2>
            <p className="text-muted-foreground">
              Multiple AI models analyzing sensor data for accurate forecasting
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aiModels.map((model) => (
              <AIModelCard key={model.modelName} {...model} />
            ))}
          </div>
          
          {/* Ensemble Prediction */}
          <div className="mt-4 p-6 bg-gradient-primary rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-primary-foreground mb-2">
              Ensemble Prediction (Weighted Average)
            </h3>
            <p className="text-3xl font-bold text-primary-foreground">4,895 kg/hectare</p>
            <p className="text-sm text-primary-foreground/80 mt-1">
              Combined prediction with 94.5% confidence
            </p>
          </div>
        </section>

        {/* Data Flow Diagram */}
        <section>
          <DataFlowDiagram />
        </section>

        {/* System Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-card rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-3">IoT Sensor Types</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-growth rounded-full"></span>
                Soil Moisture Sensors (Capacitive)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-growth rounded-full"></span>
                Temperature & Humidity Sensors (DHT22)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-growth rounded-full"></span>
                Soil pH Sensors (Electrochemical)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-growth rounded-full"></span>
                Light Intensity Sensors (Photoresistor)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-growth rounded-full"></span>
                NPK Sensors (Nutrient Analysis)
              </li>
            </ul>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-3">AI Model Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <strong>RNN:</strong> Temporal pattern recognition for time-series data
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <strong>LightGBM:</strong> Efficient gradient boosting with feature importance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <strong>DNN:</strong> Multi-layer processing for complex relationships
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Ensemble learning for improved accuracy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Real-time prediction updates
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
