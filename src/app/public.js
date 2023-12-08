import axios from 'axios';

// قم بإنشاء متغير data لتخزين البيانات المسترجعة
let data = [];

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/read');
    console.log('البيانات المسترجعة:', response.data);
    if (Array.isArray(response.data.data)) {
      data = response.data.data;
      globals.daysSinceSubscription = calculateDaysSinceSubscription();
    } else {
      console.error('البيانات المسترجعة ليست مصفوفة.');
    }
  } catch (error) {
    console.error('حدث خطأ أثناء جلب البيانات:', error);
  }
};

const calculateDaysSinceSubscription = () => {
  const currentDate = new Date();
  const subscriptionDate = data.length > 0 ? new Date(data[data.length - 1].Subscription) : new Date();
  return Math.floor((currentDate - subscriptionDate) / (1000 * 60 * 60 * 24));
};

fetchData();

export default globals;
