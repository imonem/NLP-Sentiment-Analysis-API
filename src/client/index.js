import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';
import babelPolyfill from 'babel-polyfill';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// console.log(checkForName);

export {
    handleSubmit,
    checkForName
};
