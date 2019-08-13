//import Rox from 'rox-react-native';
import Rox from 'rox-browser';

const Flags = {
	addFlag: new Rox.Flag()
}

Rox.register('default', Flags);
Rox.setup('5d52fdd22385ac15e399fd2c', {
  debugLevel: 'verbose'
});
export default Flags;
