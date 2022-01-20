import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration
} from 'react-native';

import Result from '../Result';

import { styles } from './styles';

export default function Calculator() {
    const [result, setResult] = useState('');

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const onResult = () => {
        if (!height) {
            alert('O campo de altura é obrigatório.');
            return;
        }

        if (!weight) {
            alert('O campo de peso é obrigatório.');
            return;
        }

        let heightFormat = height.replace(',', '.');
        let weightFormat = weight.replace(',', '.');

        setResult((parseFloat(weightFormat) / (parseFloat(heightFormat) * parseFloat(heightFormat))).toFixed(2));
        setHeight('');
        setWeight('');
        Vibration.vibrate();
    }
    
    const onClear = () => {
        setResult('');
        setHeight('');
        setWeight('');
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textLabel}>Sua Altura: *</Text>
                <TextInput
                    placeholder="Digite a sua altura. Ex: 1.80"
                    keyboardType="numeric"
                    value={height}
                    onChangeText={setHeight}
                    style={styles.input}
                />

                <Text style={styles.textLabel}>Seu Peso: *</Text>
                <TextInput
                    placeholder="Digite o seu peso. Ex: 72"
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={setWeight}
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={onResult}>
                    <Text style={styles.textButton}>Calcular</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonClear} onPress={onClear}>
                    <Text style={styles.textButton}>Limpar Resultado</Text>
                </TouchableOpacity>
            </View>

            <Result getResult={result}/>
        </View>
    )
}