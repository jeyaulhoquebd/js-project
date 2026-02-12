// ১. একটি অ্যারে তৈরি করা (আমাদের পছন্দের ফলের তালিকা)
const fruits = ['Mango', 'Apple', 'Banana', 'Orange'];

// ২. অ্যারেতে নতুন একটি ফল যোগ করা
fruits.push('Jackfruit'); 

// ৩. অ্যারের দৈর্ঘ্য বা কয়টি উপাদান আছে তা দেখা
console.log('মোট ফলের সংখ্যা:', fruits.length);

// ৪. ফর লুপ (for loop) ব্যবহার করে সব ফলের নাম প্রিন্ট করা
console.log('ফলের তালিকা:');
for (let i = 0; i < fruits.length; i++) {
    console.log('ইনডেক্স ' + i + '-এ আছে: ' + fruits[i]);
}