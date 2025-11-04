import { useContext, useEffect, useState } from 'react'
import Icon from '../icon/Icon'
import styles from './dropdown.module.css'
import { DropDownContext } from '../../context/DropDownContext'

export default function Dropdown() {
    const { setDropDown } = useContext(DropDownContext)
    const [selected, setSelected] = useState('downDate')
    const [unSelect, setunSelect] = useState(true)
    const [activeList, setActiveList] = useState(false)
    const [title, setTitle] = useState('По дате создания')
    const btnStyle = styles.button
    const onClickListItem = (event, title, sortBy, orderBy) => {
        setActiveList(false)
        setSelected(event.target.name)
        setTitle(`По ${title.toLowerCase()}`)
        setDropDown({sortBy: sortBy, orderBy: orderBy})
    }
    const onClickSortButton = () => {
        setActiveList(!activeList)
        setunSelect(false)
    }
    useEffect(() => {
        document.documentElement.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains(btnStyle)) {
                return
            }
            setActiveList(false)
        })
    }, [])
    return (
        <div className={styles.block}>
            <button className={`${btnStyle} ${unSelect && styles.unSelected}`} onClick={onClickSortButton}>
                <Icon name={selected} />
                {title}
                <span>
                    <Icon name="chevronBottom" />
                </span>
            </button>
            <div className={`${styles.sortBlock} ${activeList && styles.active}`}>
                <div className={styles.headerBlock}>
                    <Icon name={'filter'} />
                    <h2 className={styles.sortHeader}>Сортировка по:</h2>
                </div>
                <ul className={styles.sortList}>
                    <li>
                        <button className={styles.sortButton} onClick={(event) => onClickListItem(event, 'Приоритету', 'priority', 'asc')} name='fromUnimportant'>
                            <Icon name="fromUnimportant" />
                            Приоритету
                            {selected == 'fromUnimportant' && <span>
                                <Icon name="check" />
                            </span>}
                        </button>
                    </li>
                    <li>
                        <button className={styles.sortButton} onClick={(event) => onClickListItem(event, 'Приоритету', 'priority', 'desc')} name='ofImportance'>
                            <Icon name="ofImportance" />
                            Приоритету
                            {selected == 'ofImportance' && <span>
                                <Icon name="check" />
                            </span>}
                        </button>
                    </li>
                    <li>
                        <button className={styles.sortButton} onClick={(event) => onClickListItem(event, 'Алфавиту', 'alphabet', 'asc')} name='downAlphabet'>
                            <Icon name="downAlphabet" />
                            Алфавиту
                            {selected == 'downAlphabet' && <span>
                                <Icon name="check" />
                            </span>}
                        </button>
                    </li>

                    <li>
                        <button className={styles.sortButton} onClick={(event) => onClickListItem(event, 'Алфавиту', 'alphabet', 'desc')} name='upAlphabet'>
                            <Icon name="upAlphabet" />
                            Алфавиту
                            {selected == 'upAlphabet' && <span>
                                <Icon name="check" />
                            </span>}
                        </button>
                    </li>
                    <li>
                        <button className={styles.sortButton} onClick={(event) => onClickListItem(event, 'Дате создания', 'create', 'asc')} name='downDate'>
                            <Icon name="downDate" />
                            Дате создания
                            {selected == 'downDate' && <span>
                                <Icon name="check" />
                            </span>}
                        </button>
                    </li>
                    <li>
                        <button className={styles.sortButton} onClick={(event) => onClickListItem(event, 'Дате создания', 'create', 'desc')} name='upDate'>
                            <Icon name="upDate" />
                            Дате создания
                            {selected == 'upDate' && <span>
                                <Icon name="check" />
                            </span>}
                        </button>
                    </li>
                    <li>
                        <button className={styles.sortButton} onClick={(event) => onClickListItem(event, 'Дате обновления', 'update', 'asc')} name='newOld'>
                            <Icon name="newOld" />
                            Дате обновления
                            {selected == "newOld" && <span>
                                <Icon name="check" />
                            </span>}
                        </button>
                    </li>
                    <li>
                        <button className={styles.sortButton} onClick={(event) => onClickListItem(event, 'Дате обновления', 'update', 'desc')} name='oldNew'>
                            <Icon name="oldNew" />
                            Дате обновления
                            {selected == 'oldNew' && <span>
                                <Icon name="check" />
                            </span>}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}