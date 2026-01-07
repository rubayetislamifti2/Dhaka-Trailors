import "./printOrder.css";

function ReceiptBlock() {
  return (
    <div className="receipt-block">

      {/* HEADER */}
      <table className="full border">
        <tr>
          <td className="logo-cell">DT</td>
          <td className="center bold">
            ঢাকা টেইলার্স এন্ড কুরিয়ার<br />
            <small>বস্ত্র বাজার, ফুলবাড়িয়া, সাতমসজিদ, ঢাকা</small>
          </td>
        </tr>
      </table>

      {/* ORDER + CUSTOMER */}
      <table className="full border mt">
        <tr className="head">
          <td colSpan="2">অর্ডার বিবরণ</td>
          <td colSpan="2">গ্রাহকের বিবরণ</td>
        </tr>
        <tr>
          <td>অর্ডার নাম্বার</td><td></td>
          <td>নাম</td><td></td>
        </tr>
        <tr>
          <td>ডেলিভারি তারিখ</td><td></td>
          <td>মোবাইল</td><td></td>
        </tr>
      </table>

      {/* 3 COLUMN SECTION */}
      <table className="full border mt">
        <tr className="head">
          <td>পোশাকের বিবরণ</td>
          <td>ডিজাইন</td>
          <td>উপরের পরিমাপ</td>
        </tr>
        <tr>
          <td className="vtop">
            লম্বা<br />হাতা<br />বুক<br />কোমর<br />হিপ<br />থাই<br />পা
          </td>
          <td className="vtop">
            কলার<br />পকেট<br />বোতাম<br />কাফ<br />প্লিট<br />কাট
          </td>
          <td className="vtop">
            লম্বা<br />বুক<br />হাতা<br />গলা<br />কাঁধ
          </td>
        </tr>
      </table>

      {/* LOWER MEASUREMENT */}
      <table className="full border mt">
        <tr className="head">
          <td>নিচের পরিমাপ</td>
          <td>নিচের পরিমাপ</td>
        </tr>
        <tr>
          <td className="vtop">লম্বা<br />কোমর<br />হিপ<br />পা</td>
          <td className="vtop"></td>
        </tr>
      </table>

      {/* PRODUCT TABLE */}
      <table className="full border mt">
        <tr className="head">
          <td>পোশাকের বিবরণ</td>
          <td>পরিমাণ</td>
          <td>দর</td>
          <td>মোট</td>
        </tr>
        <tr>
          <td height="80"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

      {/* AMOUNT BOX */}
      <table className="amount border mt">
        <tr><td>মোট টাকা</td></tr>
        <tr><td>অগ্রিম টাকা</td></tr>
        <tr><td>বাকি টাকা</td></tr>
      </table>

      {/* FOOTER */}
      <div className="note">
        ডেলিভারি নেওয়ার সময় রসিদ সাথে আনতে হবে।<br />
        ১৫ দিনের মধ্যে কাপড় না নিলে কর্তৃপক্ষ দায়ী থাকবে না।
      </div>

      <div className="sign">
        <span>গ্রাহকের স্বাক্ষর</span>
        <span>কর্তৃপক্ষ</span>
      </div>

    </div>
  );
}

export default function OrderReceipt() {
  return (
    <div className="page">
      <ReceiptBlock />
      <div className="cut-line"></div>
      <ReceiptBlock />
    </div>
  );
}
