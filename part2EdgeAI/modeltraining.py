# recyclable_classification.py
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import tensorflow_datasets as tfds
import os

# Create synthetic dataset structure (in real scenario, use actual images)
def create_dataset_structure():
    classes = ['plastic', 'paper', 'glass', 'metal', 'cardboard']
    for split in ['train', 'test']:
        for class_name in classes:
            os.makedirs(f'data/{split}/{class_name}', exist_ok=True)
    return classes

# Build a lightweight CNN model
def create_model(num_classes=5):
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=(128, 128, 3)),
        layers.MaxPooling2D(2, 2),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D(2, 2),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.GlobalAveragePooling2D(),
        layers.Dense(64, activation='relu'),
        layers.Dropout(0.5),
        layers.Dense(num_classes, activation='softmax')
    ])
    
    model.compile(
        optimizer='adam',
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )
    
    return model

# Convert to TensorFlow Lite with optimization
def convert_to_tflite(model_path):
    converter = tf.lite.TFLiteConverter.from_saved_model(model_path)
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    converter.target_spec.supported_types = [tf.float16]
    tflite_model = converter.convert()
    
    with open('recyclable_classifier.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# Test TFLite model
def test_tflite_model(tflite_model_path, test_images, test_labels):
    interpreter = tf.lite.Interpreter(model_path=tflite_model_path)
    interpreter.allocate_tensors()
    
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()
    
    predictions = []
    
    for i in range(len(test_images)):
        test_image = test_images[i].astype(np.float32)
        if test_image.shape != tuple(input_details[0]['shape'][1:]):
            test_image = tf.image.resize(test_image, 
                                       input_details[0]['shape'][1:3])
        
        interpreter.set_tensor(input_details[0]['index'], [test_image])
        interpreter.invoke()
        output = interpreter.get_tensor(output_details[0]['index'])
        predictions.append(np.argmax(output))
    
    accuracy = np.mean(predictions == test_labels)
    return accuracy, predictions

# Main execution
if __name__ == "__main__":
    print("Creating Edge AI Recyclable Classification Prototype...")
    
    # Create dataset structure
    classes = create_dataset_structure()
    print(f"Classes: {classes}")
    
    # In real scenario, load actual dataset
    # For simulation, we'll create a simple model and convert it
    model = create_model(len(classes))
    model.summary()
    
    # Save model
    model.save('recyclable_model')
    
    # Convert to TFLite
    tflite_model = convert_to_tflite('recyclable_model')
    print("Model converted to TensorFlow Lite successfully!")
    
    # Simulate testing (in real scenario, use actual test data)
    print("TFLite model ready for deployment on edge devices!")