
import { ArrowLeft, Award, TrendingUp, Gift } from 'lucide-react';
import { currentUser, pointsTransactions } from '../data/mockData';

export function LoyaltyScreen() {
  const navigate = (path: string) => console.log('navigate', path);

  const pointsNeededForReward = 100;
  const progress = (currentUser.points % pointsNeededForReward) / pointsNeededForReward;

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/home')} className="hover:bg-white/10 rounded-full p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Loyalty Rewards</h1>
        </div>
      </div>

      {/* Points Balance */}
      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-xl p-8 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-4">
            <Award className="w-12 h-12 text-white" />
          </div>
          <p className="text-yellow-900 font-semibold mb-2">Your Points Balance</p>
          <p className="text-6xl font-bold text-white mb-4">{currentUser.points}</p>
          <p className="text-yellow-100 text-sm">Keep earning to unlock rewards!</p>
        </div>
      </div>

      {/* Reward Progress */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-gray-900">Next Reward</h3>
            </div>
            <span className="text-sm text-gray-600">
              {currentUser.points % pointsNeededForReward}/{pointsNeededForReward} points
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progress * 100}%` }}
            ></div>
          </div>

          <p className="text-sm text-gray-600">
            {pointsNeededForReward - (currentUser.points % pointsNeededForReward)} points until
            your next free item!
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="font-bold text-gray-900 mb-4">How Rewards Work</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Earn Points</p>
                <p className="text-sm text-gray-600">
                  Get 1 point for every €1 spent on food orders
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                <Gift className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Redeem Rewards</p>
                <p className="text-sm text-gray-600">
                  100 points = 1 free item (up to €10 value)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                <Award className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Bonus Points</p>
                <p className="text-sm text-gray-600">
                  Special promotions and events for extra points
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Points History */}
      <div className="px-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="font-bold text-gray-900 mb-4">Points History</h3>
          <div className="space-y-3">
            {pointsTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between py-2">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-xs text-gray-600">
                    {new Date(transaction.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-600">+{transaction.points}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
