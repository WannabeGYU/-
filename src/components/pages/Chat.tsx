import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send, FileText, QrCode, CheckCircle } from 'lucide-react';
import { io, Socket } from 'socket.io-client';
import type { UserRole, MatchingData } from '../../App';

interface ChatProps {
  matchingData: MatchingData;
  userRole: UserRole;
  onOpenQRPreview: () => void;
  onBack: () => void;
}

interface Message {
  id: number;
  sender: 'system' | 'user' | 'partner';
  text: string;
  timestamp: Date;
}

export function Chat({ matchingData, userRole, onOpenQRPreview, onBack }: ChatProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'system',
      text: '🎉 매칭이 완료되었습니다! 이제 채팅을 시작할 수 있습니다.',
      timestamp: new Date(),
    },
  ]);
  const socketRef = useRef<Socket | null>(null);

  const partnerName = userRole === 'brand'
    ? matchingData.venue.name
    : matchingData.brand.name;

  // Unique room ID based on matching data (simplified for demo)
  const roomId = `room_${matchingData.brand.id}_${matchingData.venue.id}`;

  useEffect(() => {
    // Connect to Socket.io server
    socketRef.current = io('http://localhost:3000');

    socketRef.current.emit('join_room', roomId);

    socketRef.current.on('receive_message', (data: any) => {
      // Only add message if it's from the partner (or self if we want to see echo, but usually we add self immediately)
      // For simplicity in this demo, we'll just append whatever comes in if it's not from 'me' (handled by sender check in real app)
      // Here we assume 'receive_message' broadcasts to everyone in room including sender, 
      // OR we can just add local message immediately and ignore self-message from server.

      // Let's assume server broadcasts to others. But for this simple demo, let's just listen.
      if (data.sender !== userRole) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            sender: 'partner', // Received messages are from partner
            text: data.message,
            timestamp: new Date(data.timestamp),
          },
        ]);
      }
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [roomId, userRole]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: message,
      timestamp: new Date(),
    };

    // Add locally
    setMessages((prev) => [...prev, newMessage]);

    // Send to server
    socketRef.current?.emit('send_message', {
      room: roomId,
      message: message,
      sender: userRole,
      timestamp: new Date().toISOString(),
    });

    setMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl">{partnerName}</h1>
              <p className="text-sm text-green-600 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                매칭 완료
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Matching Summary */}
      <div className="max-w-4xl mx-auto w-full px-6 py-6">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 border border-indigo-200">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-900">협업 매칭 정보</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-indigo-600 mb-1">브랜드</p>
              <p className="text-indigo-900">{matchingData.brand.name}</p>
            </div>
            <div>
              <p className="text-sm text-indigo-600 mb-1">공간</p>
              <p className="text-indigo-900">{matchingData.venue.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-4xl mx-auto w-full px-6 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Contract Template Button */}
          <button className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-2 border-slate-200 hover:border-indigo-400 text-left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="mb-1">계약 템플릿 선택</h3>
                <p className="text-sm text-slate-600">전시/판매/팝업 계약서 양식</p>
                <span className="inline-block mt-2 text-sm text-indigo-600">선택하기 →</span>
              </div>
            </div>
          </button>

          {/* QR Code Button */}
          <button
            onClick={onOpenQRPreview}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-2 border-slate-200 hover:border-green-400 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <QrCode className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="mb-1">QR 코드 발급 요청</h3>
                <p className="text-sm text-slate-600">판매용 QR 결제 코드 생성</p>
                <span className="inline-block mt-2 text-sm text-green-600">미리보기 →</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 pb-6">
        <div className="bg-white rounded-2xl shadow-md p-6 min-h-[400px] flex flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto mb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'system' ? 'justify-center' :
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
              >
                <div
                  className={`max-w-[70%] px-4 py-3 rounded-2xl ${msg.sender === 'system'
                      ? 'bg-yellow-50 text-yellow-800 text-sm text-center border border-yellow-200'
                      : msg.sender === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-900'
                    }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="메시지를 입력하세요..."
              className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Notice */}
      <div className="bg-green-50 border-t-2 border-green-200 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-sm text-green-800">
            ✅ 매칭 후에만 채팅이 가능합니다 • 플랫폼을 통한 안전한 협업을 위해 모든 커뮤니케이션은 여기서 진행됩니다
          </p>
        </div>
      </div>
    </div>
  );
}
