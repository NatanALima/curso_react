import styles from './Frase.module.css';

export default function Frase() {

    console.log(styles);
    const frases = [
        {id: 1,
         fraseText: "A vantagem de ter péssima memória é divertir-se muitas vezes com as mesmas coisas boas como se fosse a primeira vez.",
         autor: "Friedrich Nietzsche",
         refText: "UNKNOWN"
        },
        {id: 2,
         fraseText: "Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido.",
         autor: "Fernando Pessoa",
         refText: "UNKNOWN"
        },
        {id: 3,
         fraseText: "Daria tudo que sei pela metade do que ignoro.",
         autor: "René Descartes",
         refText: "UNKNOWN"
        },
        {id: 4,
         fraseText: "Vou-lhe dizer um grande segredo, meu caro. Não espere o juízo final. Ele realiza-se todos os dias.",
         autor: "Albert Camus",
         refText: "UNKNOWN"
        },
        {id: 5,
         fraseText: "Quem comete uma injustiça é sempre mais infeliz que o injustiçado.",
         autor: "Platão",
         refText: "UNKNOWN"
        },
    ]
    return(
        frases.map(frase => {
            return(
                <section className={styles.fraseContainer} key={frase.id}>
                    <p className={styles.fraseSlot}>{frase.fraseText}</p>
                    <p className={styles.fraseAutor}>{frase.autor}</p>
                    <p className={styles.refText}>{frase.refText}</p>
                </section>
            )
        })
        
    )
}