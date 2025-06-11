import React, { useState } from 'react';
import { CreditCard, Smartphone, Building, Edit3 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../lib/supabase';

export const Giving: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const [paymentInfo, setPaymentInfo] = useState({
    upi: 'church@okaxis',
    bankAccount: 'Account: 50200029514200, IFSC: HDFC0000017',
    bankDetails: 'HDFC Bank, Chennai Branch',
    accountHolder: 'Home Church',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempPaymentInfo, setTempPaymentInfo] = useState(paymentInfo);
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('upi');

  const handleSavePayment = () => {
    setPaymentInfo(tempPaymentInfo);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setTempPaymentInfo(paymentInfo);
    setIsEditing(false);
  };

  const handleDonation = async () => {
    if (!user) {
      alert('Please sign in to make a donation');
      return;
    }

    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }

    try {
      const { error } = await supabase
        .from('payments')
        .insert([
          {
            user_id: user.id,
            amount: parseFloat(donationAmount),
            payment_method: selectedMethod,
            status: 'pending',
          },
        ]);

      if (error) throw error;

      alert('Donation recorded successfully! Thank you for your generosity.');
      setDonationAmount('');
    } catch (error) {
      console.error('Error recording donation:', error);
      alert('Error recording donation. Please try again.');
    }
  };

  return (
    <section id="giving" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('giving.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('giving.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Donation Amount Input */}
          {user && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Make a Donation
              </h3>
              <div className="max-w-md mx-auto space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Donation Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <select
                    value={selectedMethod}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="upi">UPI Payment</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <button
                  onClick={handleDonation}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Record Donation
                </button>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                {t('giving.methods')}
              </h3>
              {user && (
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Edit3 size={16} />
                  {t('giving.updatePayment')}
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* UPI Payment */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Smartphone className="text-purple-600" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {t('giving.upi')}
                  </h4>
                </div>

                {isEditing ? (
                  <input
                    type="text"
                    value={tempPaymentInfo.upi}
                    onChange={(e) =>
                      setTempPaymentInfo({ ...tempPaymentInfo, upi: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter UPI ID"
                  />
                ) : (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-mono text-lg text-gray-800">{paymentInfo.upi}</p>
                  </div>
                )}

                <div className="mt-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg p-4 text-white text-center">
<img
  src="/images/Offerings.png"
  alt="QR Code for UPI Payment"
  className="w-40 h-40 mx-auto mb-2 rounded-md border border-white shadow-md object-contain"
/>
                  <p className="text-sm">Scan to pay via UPI</p>
                </div>
              </div>

              {/* Bank Transfer */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Building className="text-green-600" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {t('giving.bank')}
                  </h4>
                </div>

                <div className="space-y-4">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={tempPaymentInfo.bankAccount}
                        onChange={(e) =>
                          setTempPaymentInfo({ ...tempPaymentInfo, bankAccount: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Account & IFSC"
                      />
                      <input
                        type="text"
                        value={tempPaymentInfo.bankDetails}
                        onChange={(e) =>
                          setTempPaymentInfo({ ...tempPaymentInfo, bankDetails: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Bank Details"
                      />
                      <input
                        type="text"
                        value={tempPaymentInfo.accountHolder}
                        onChange={(e) =>
                          setTempPaymentInfo({ ...tempPaymentInfo, accountHolder: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Account Holder Name"
                      />
                    </>
                  ) : (
                    <>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-mono text-lg text-gray-800">
                          {paymentInfo.bankAccount}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-lg text-gray-700">{paymentInfo.bankDetails}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-lg font-semibold text-gray-700">
                          {paymentInfo.accountHolder}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={handleCancelEdit}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePayment}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
