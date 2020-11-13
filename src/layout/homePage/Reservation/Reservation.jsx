import React , {useState , useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Row , Col } from 'react-bootstrap';
// import 'date-fns';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import { menu } from "../../../images/imagesHelper"
import "./Reservation.css"

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '40%',
    color: '#ffff' ,
    borderColor: '#ffff' ,

  },
  input:{
    color: '#ffff' ,
    borderColor: '#ffff' ,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '40%',
    color: '#ffff' ,

  },
 }));

function Reservation() {
  const classes = useStyles();
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    Person: '',

  });
  const handleChange = (event) => {
    setAge(event.target.value);
  };

   
  return (
    <div className="Reservation">
        <section className="Reservation_form">
          <h1>Book a Table</h1>
          <form className={classes.container} noValidate>
            <div>
            <TextField
              id="date"
              label="Date"
              type="date"
              defaultValue="2020-12-12"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="time"
              label="Time"
              type="time"
              defaultValue="07:30"
              onChange={(e)=>console.log(e.target.value)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            </div>
            <div>
              <FormControl className={classes.formControl}>
                  <NativeSelect
                    value={formData.Person}
                    onChange={handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-native-label-placeholder',
                    }}
                  >
                    <option value={1}>1 Person</option>
                    <option value={2}>2 Person</option>
                    <option value={3}>3 Person</option>
                    <option value={4}>4 Person</option>
                    <option value={5}>5 Person</option>
                    <option value={6}>6 Person</option>
                    <option value={7}>7 Person</option>
                    <option value={8}>8 Person</option>
                  </NativeSelect>
                </FormControl>
                <TextField id="standard-basic" label="Name" />
            </div>
            <div>
            <TextField id="standard-basic" label="Phone" />
            <TextField id="standard-basic" label="Email" />
            </div>
          </form>
          <h2>Book Now</h2>
        </section>
        <section>
          <img src={menu.table} />
        </section>
  
    </div>
  );
}

export default Reservation;

