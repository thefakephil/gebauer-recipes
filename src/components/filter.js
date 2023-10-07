import styles from './filter.module.css';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


export function FilterByAlphebet() {
    return (
        <div className={styles.filterContainer}>
            {alphabet.map((letter) =>
                <div key={letter.toString()} value={letter} >
                     {letter.toUpperCase()} 
                </div>
            )}
        </div>
    )
}