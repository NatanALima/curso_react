export default function ButtonsCadastro({btnStyles, handleDelbox, handleAddbox}) {
    return(
        <div className={btnStyles.botoes}>
            <button type="submit" className={`${btnStyles.btn} ${btnStyles.envia}`}> <ion-icon name="checkmark-done-outline"></ion-icon> </button>
            <button type="button" className={`${btnStyles.btn} ${btnStyles.remove}`} onClick={handleDelbox}> <ion-icon name="close-outline"></ion-icon> </button>
            <button type="button" className={`${btnStyles.btn} ${btnStyles.add}`} onClick={handleAddbox}> <ion-icon name="add-outline"></ion-icon> </button>
        </div>
    )
}