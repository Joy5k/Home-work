// home work-1

// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
// // —-------------complete—-------

const myName = 'Mehedi Hasan';
let age = 20;

// home work-2
// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
// —----------------complete—------------

const myIdentiy = `This is my age ${age} and My Name is ${myName}`;
// console.log(myIdentiy);

// home work-3.1
// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
// —-----------complete—----

const add6 = (first) => first / 5;
const secondFunction = add6(10);
// home work -3.2
/**
 * 
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
—------------complete—--------------

 */

// first way
const add = (num1, num2) => (num1 + 2) * (num2 + 2);
let numbers = add(4, 5);
// console.log(numbers);
// second way 
const add1 = (n1, n2) => {
    const first = n1 + 2;
    const second = n2 + 2;
    const multiPly = first * second;
    return multiPly;
}
const number = add1(2, 2);
// console.log(number);
// home work 3.3

/**
 * ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
—---------------complete—----------

 */
const probl3 = (n1, n2, n3) => (n1 * n2 * n3);
const value = probl3(2, 4, 4);

// console.log('its problem sovle', value);

// home work-3.4
/**
 * 
৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

*/
const multiPly = (n1, n2) => {
    const first = n1 + 2;
    const second = n2 + 2;
    const multiPlyHere = first * second;
    return multiPlyHere;
}
let setValue = multiPly(8, 8);
// console.log(setValue);


//  home work-5
/**
 * 
৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। */

const arr1 = [4, 5, 15, 85, 4, 54, 5,54, 5, 4];
const map1 = arr1.map(x => x * 5);
// console.log(map1);

/***
 *
 * home work-6
 * 
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
*/
const num = [1, 55, 5, 4, 58, 4, 587, 532, 75, 455, 745, 4, 5, 2,];
const oddNum = num.filter(x => x % 2);
// console.log(oddNum);
/**
 * home work-7.1
 * 
 * ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
 */
const friends = [
    { name:'Joy', Phone: 'Iphone', price: 145000 },
    { name:'Joy', Phone: 'Iphone', price: 45000 },
    { name:'Joy', Phone: 'Iphone', price: 15000 },
    { name:'Joy', Phone: 'Iphone', price: 5000 }
];
const findIt = friends.find(friends=> friends.price ===5000);
// console.log(findIt);

// home work-8
/**
 * ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
 */
// first way
const myProfile = { name: 'Joy', Phone: 'Iphone', price: 145000 };
const price = myProfile.name;
// console.log(name);
// second way

const { name, Phone } = { name: 'Joy', Phone: 'Iphone', price: 145000 };
// console.log(name,Phone);

// home work-9 I am confused is it right or wrong
/**
 * 
৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

 */
const [first, second, third] = [2, 54, 24, 56];
let thirdItem = third;
// console.log(thirdItem);
// home work-10
/**
 * 
 * ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
 */
function sum(n1, n2, n3 = 7) {
    const total = n1 + n2 + n3;
    return total;
}
const setItem = sum(10, 10);
// console.log(setItem);

// home work-11
/**
 * 
১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

 */
const persone = {
    name: 'Joy',
    age: 20,
    mobile:['1923588531','01941411811','1923588531','01941411811'],
    hobbys: {
        first: 'Web development',
        second: ' Reading Book',
        third: 'swiming'
    },
  
};
// console.log(persone.mobile[3]);


// home work-12;
/**
 * ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 

 */
 const man = {
    name: 'Joy',
    age: 20,
    mobile:['1923588531','01941411811','1923588531','01941411811'],
    hobbys: {
        first: 'Web development',
        second: ' Reading Book',
        third: 'swiming'
     },
     address: {
         divison: 'Barishal',
         distric: 'patuakhali',
        //  village: {
        //      name:'Tukshali'
        //  }
    }
  
};
const findVillage = man.address.village?.name;
console.log(findVillage);
/**
 * ? এই চিন্হ টার কাজ হচ্ছে  একটা error থেকে বাচানো। আর কোন  error js পরবর্তি কোন কাজ করেনা। তাই ? টা ব্যবহ্রত হয়।
 */
