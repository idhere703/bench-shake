import Immutable from 'immutable';

const Contact = Immutable.Record({
    id: '',
    email: '',
    name: '',
    phone: ''
});

export default Contact;