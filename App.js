import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [barbellWeight, setBarbellWeight] = useState(25);
  const [desiredWeight, setDesiredWeight] = useState('');

  function calculateWeight() {
    const totalWeight = parseFloat(desiredWeight);
    if (isNaN(totalWeight)) {
      alert('Please enter a valid weight.');
    } else {
      let remainingWeight = (totalWeight - barbellWeight) / 2;
      const weights = [45, 25, 10, 5, 2.5];
      let weightString = '';
      for (let i = 0; i < weights.length; i++) {
        const weight = weights[i];
        const count = Math.floor(remainingWeight / weight);
        remainingWeight -= count * weight;
        if (count > 0) {
          weightString += `${count}x${weight}, `;
        }
      }
      alert(`Weights needed per side: ${weightString.slice(0, -2)}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Barbell Weight Calculator</Text>
      <Text style={styles.label}>Weight of the barbell:</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={barbellWeight === 25 ? styles.radioChecked : styles.radioUnchecked}
          onPress={() => setBarbellWeight(25)}
        >
          <Text style={styles.radioText}>25 lbs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={barbellWeight === 45 ? styles.radioChecked : styles.radioUnchecked}
          onPress={() => setBarbellWeight(45)}
        >
          <Text style={styles.radioText}>45 lbs</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Enter the desired weight:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight in pounds"
        keyboardType="decimal-pad"
        onChangeText={setDesiredWeight}
        value={desiredWeight}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={calculateWeight}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2B3A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#A8DADC',
    fontFamily: 'sans-serif-medium',
    marginBottom: 32,
  },
  label: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  radioGroup: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  radioChecked: {
    backgroundColor: '#A8DADC',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  radioUnchecked: {
    backgroundColor: '#E2E2E2',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  radioText: {
    fontSize: 18,
    color: '#1E2B3A',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
    width: '80%',
    fontSize: 18,
    },
    button: {
    backgroundColor: '#457B9D',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    },
    buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    },
  });
