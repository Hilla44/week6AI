# raspberry_pi_simulation.py
import tensorflow as tf
import numpy as np
import time
from PIL import Image
import json

class EdgeAISystem:
    def __init__(self, tflite_model_path):
        self.interpreter = tf.lite.Interpreter(model_path=tflite_model_path)
        self.interpreter.allocate_tensors()
        
        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()
        
        self.classes = ['plastic', 'paper', 'glass', 'metal', 'cardboard']
        
    def preprocess_image(self, image_path):
        """Preprocess image for TFLite model"""
        image = Image.open(image_path).convert('RGB')
        image = image.resize((128, 128))
        image_array = np.array(image, dtype=np.float32) / 255.0
        return np.expand_dims(image_array, axis=0)
    
    def predict(self, image_path):
        """Make prediction on single image"""
        start_time = time.time()
        
        # Preprocess
        input_data = self.preprocess_image(image_path)
        
        # Set input tensor
        self.interpreter.set_tensor(self.input_details[0]['index'], input_data)
        
        # Run inference
        self.interpreter.invoke()
        
        # Get output
        output_data = self.interpreter.get_tensor(self.output_details[0]['index'])
        
        inference_time = (time.time() - start_time) * 1000  # Convert to ms
        
        predicted_class = np.argmax(output_data[0])
        confidence = np.max(output_data[0])
        
        return {
            'class': self.classes[predicted_class],
            'confidence': float(confidence),
            'inference_time_ms': inference_time,
            'all_predictions': {
                self.classes[i]: float(output_data[0][i]) 
                for i in range(len(self.classes))
            }
        }
    
    def benchmark_performance(self, num_iterations=100):
        """Benchmark model performance"""
        dummy_input = np.random.random(
            (1, 128, 128, 3)
        ).astype(np.float32)
        
        times = []
        for _ in range(num_iterations):
            start_time = time.time()
            
            self.interpreter.set_tensor(
                self.input_details[0]['index'], 
                dummy_input
            )
            self.interpreter.invoke()
            self.interpreter.get_tensor(self.output_details[0]['index'])
            
            times.append((time.time() - start_time) * 1000)
        
        return {
            'avg_inference_time_ms': np.mean(times),
            'min_inference_time_ms': np.min(times),
            'max_inference_time_ms': np.max(times),
            'throughput_fps': 1000 / np.mean(times)
        }

# Simulation on Colab (replace with actual Raspberry Pi deployment)
def simulate_edge_deployment():
    print("=== Edge AI Deployment Simulation ===")
    
    # Initialize system
    edge_system = EdgeAISystem('recyclable_classifier.tflite')
    
    # Benchmark performance
    print("\n--- Performance Benchmark ---")
    performance = edge_system.benchmark_performance()
    for key, value in performance.items():
        print(f"{key}: {value:.2f}")
    
    # Simulate real-time processing
    print("\n--- Real-time Processing Simulation ---")
    for i in range(5):
        # Simulate image processing
        result = edge_system.predict(f'sample_image_{i}.jpg')  # Replace with actual images
        print(f"Image {i+1}: {result['class']} "
              f"(Confidence: {result['confidence']:.2f}, "
              f"Time: {result['inference_time_ms']:.1f}ms)")

if __name__ == "__main__":
    simulate_edge_deployment()