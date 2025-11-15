import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface AIModelCardProps {
  modelName: string;
  modelType: string;
  accuracy: number;
  prediction: string;
  confidence: number;
}

export const AIModelCard = ({ modelName, modelType, accuracy, prediction, confidence }: AIModelCardProps) => {
  return (
    <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{modelName}</CardTitle>
          <Badge variant="outline" className="text-xs">{modelType}</Badge>
        </div>
        <CardDescription>Model Accuracy: {accuracy}%</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Crop Yield Prediction</span>
            <span className="font-semibold text-foreground">{prediction}</span>
          </div>
          <Progress value={confidence} className="h-2" />
          <p className="text-xs text-muted-foreground mt-1">Confidence: {confidence}%</p>
        </div>
      </CardContent>
    </Card>
  );
};
