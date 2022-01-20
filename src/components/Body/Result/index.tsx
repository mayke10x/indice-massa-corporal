import { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Share
} from 'react-native';

import { styles } from './styles';

export default function Result({ getResult }: { getResult: string }) {
    const [color, setColor] = useState<'success' | 'warning' | 'danger' | 'veryDanger' | 'default'>('warning');

    useEffect(() => {
        if (parseFloat(getResult) < 18.5) {
            setColor('warning');
        } else if (parseFloat(getResult) >= 18.5 && parseFloat(getResult) <= 24.9) {
            setColor('success');
        } else if (parseFloat(getResult) > 24.9 && parseFloat(getResult) <= 30) {
            setColor('danger');
        } else if (parseFloat(getResult) > 30) {
            setColor('veryDanger');
        } else {
            setColor('default');
        }
    }, [getResult]);

    const onShare = async () => {
        const result = await Share.share({
            message: `Meu IMC é: ${getResult}`
        })
    }

    return (
        <View style={[styles.container, styles[color]]}>
            <Text style={styles.valorInitial}>{getResult ? getResult : '0.00'}</Text>
            {
                getResult ? (
                    <>
                        <Text style={styles.textValue}>
                            {
                                parseFloat(getResult) < 18.5 ?
                                    'Magreza' : 
                                parseFloat(getResult) >= 18.5 && parseFloat(getResult) <= 24.9 ?
                                    'Normal' :
                                parseFloat(getResult) > 24.9 && parseFloat(getResult) <= 30 ?
                                    'Sobrepeso' :
                                parseFloat(getResult) > 30 ?
                                    'Obesidade'
                                : ''
                            }
                        </Text>
                        
                        <TouchableOpacity onPress={onShare}>
                            <Text style={styles.textShare}>Compartilhar Resultado</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <Text style={styles.textInitial}>
                        Nesta área aparecerá o resultado e a cor correspondente. Amarelo para magreza,
                        verde para normal, laranja para sobrepeso e vermelho para indicar obesidade.
                    </Text>
                )
            }
        </View>
    )
}