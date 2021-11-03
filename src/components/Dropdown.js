
import './Dropdown.css'
import Select from 'react-select';
export default function Dropdown({ handleDropdownChange }) {
    const techCompanies = [
        { label: "Badminton Advanced", value: "Badminton Avancerad" },
        { label: "Badminton Advanced - Matchplay", value: "Badminton Avancerad - Matchspel" },
        { label: "Badminton Medium", value: "Badminton Medel" },
        { label: "Badminton Beginner", value: "Badminton Nybörjare" },
        { label: "Basketball - Matchplay", value: "Basket matchspel" },
        { label: "Basketball Beginner", value: "Basket nybörjare" },
        { label: "BodyBalance®", value: "BodyBalance®" },
        { label: "BodyCombat®", value: "BodyCombat®" },
        { label: "BodyJam®", value: "BodyJam®" },
        { label: "BodyPump®", value: "BodyPump®" },
        { label: "Table Tennis Advanced", value: "Bordtennis Avancerad" },
        { label: "Table Tennis Beginner", value: "Bordtennis Nybörjare" },
        { label: "Contemporary Dance", value: "Contemporary Dance" },
        { label: "Football - Matchplay", value: "Fotboll Matchspel" },
        { label: "Fencing Beginner", value: "Fäktning Nybörjare" },
        { label: "Fencing Level 2", value: "Fäktning Steg 2" },
        { label: "Gymnastics Beginner", value: "Gymnastik - Nybörjare" },
        { label: "Gymnastics - tools", value: "Gymnastik - Redskap" },
        { label: "HIIT", value: "HIIT" },
        { label: "Floorball", value: "Innebandy" },
        { label: "Jazz Advanced", value: "Jazz - Advanced" },
        { label: "Jazz Beginner", value: "Jazz - Nybörjare" },
        { label: "Les Mills Core®", value: "Les Mills Core®" },
        { label: "Pilates", value: "Pilates" },
        { label: "Roller Skis Beginner", value: "Rullskidor Nybörjare" },
        { label: "Roller Skis Level 2", value: "Rullskidor Steg 2" },
        { label: "Thaiboxing Beginner", value: "Thaiboxing - beginners" },
        { label: "Tone®", value: "Tone®" },
        { label: "Volleyball Beginner", value: "Volleyboll Nybörjare" },
        { label: "Volleyball Level 2", value: "Volleyboll Steg 2" },
        { label: "Volleyball Level 3", value: "Volleyboll Steg 3" },
        { label: "Volleyball Level 4", value: "Volleyboll steg 4" },
        { label: "Volleyball Level 5", value: "Volleyboll steg 5" },
        { label: "Yoga", value: "Yoga" },
        { label: "Zumba", value: "Zumba" },
    ];

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'black' : 'black',
            padding: 5,
            fontSize: "14px",
            fontWeight: "800",
        }),
        control: base => ({
            ...base,
            border: 0,
            boxShadow: "none"
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }



    return (
        <div className="form-group">
            <label className="special-label" htmlFor="Activity">Activity:</label>
            <div className="select">
                <Select options={techCompanies} styles={customStyles} onChange={(e) => handleDropdownChange(e.value)} />
            </div>
        </div>
    )
}