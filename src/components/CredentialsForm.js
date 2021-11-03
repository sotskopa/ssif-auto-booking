
import './CredentialsForm.css'
export default function CredentialsForm({ name, setName, password, setPassword }) {
    return (
        <div className="form-container">
            <form>
                <div className="form-inner">

                    <div className="form-group">
                        <label htmlFor="name">Email:</label>
                        <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} value={name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password:</label>
                        <input type="Password" name="Password" id="Password" onChange={e => setPassword(e.target.value)} value={password} />
                    </div>
                </div>
            </form>
        </div>
    )
}