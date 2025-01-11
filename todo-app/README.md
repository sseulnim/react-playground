# Todo Application

할 일 관리를 위한 React 애플리케이션입니다.

## 🚀 주요 기능

- [x] 할 일 추가/삭제
- [x] 할 일 완료 체크
- [x] 할 일 수정 (더블클릭)
- [x] 로컬 스토리지 저장
- [ ] 카테고리 분류
- [ ] 필터링

## 💻 기술 스택

- React
- Vite
- Tailwind CSS
- shadcn/ui

## 🛠️ 설치 및 실행

```bash
# 저장소 클론
git clone [repository-url]

# 프로젝트 폴더로 이동
cd todo-app

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 📁 프로젝트 구조
```
src/
├── components/
│   ├── ui/          # shadcn/ui 컴포넌트
│   └── todo/        # Todo 관련 컴포넌트
│       ├── TodoInput.jsx
│       ├── TodoList.jsx
│       └── TodoItem.jsx
├── App.jsx
└── main.jsx
```

## 🔍 주요 컴포넌트

- TodoInput: 새로운 할 일 입력 컴포넌트
- TodoList: 할 일 목록을 관리하는 컴포넌트
- TodoItem: 개별 할 일 항목 컴포넌트


## 📝 개발 일지

### 2025-01-11

#### ✨ 오늘의 작업
- 할 일 수정 기능 추가
  - 더블클릭으로 수정 모드 전환
  - Enter/Esc 키로 수정 완료/취소
  - Input 컴포넌트 추가 및 적용
  - 수정 취소 시 기존 텍스트 유지

#### 📚 배운 점
- React에서 인라인 편집 구현 방법
- shadcn/ui Input 컴포넌트 활용
- 키보드 이벤트 처리 방법

#### ⚡ 다음 작업
- [ ] 카테고리 기능 추가
- [ ] 필터링 기능

### 2025-01-10

#### ✨ 오늘의 작업

- 로컬 스토리지 기능 추가
  - 할 일 목록 영구 저장 구현
  - useState와 useEffect를 활용한 데이터 관리
  - 브라우저 새로고침 시에도 데이터 유지

#### 📚 배운 점

- localStorage를 활용한 데이터 영구 저장 방법
- React hooks(useState, useEffect)의 활용
- JSON 데이터의 직렬화/역직렬화 처리

#### ⚡ 다음 작업

- [ ] 할 일 수정 기능
- [ ] 카테고리 기능
- [ ] 필터링 기능

### 2025-01-07

#### ✨ 오늘의 작업

- PropTypes 추가
  - 각 컴포넌트의 Props 타입 정의
  - 타입 안정성 확보

#### 📚 배운 점

- PropTypes를 통한 타입 체크 방법

### 2024-12-30

#### ✨ 오늘의 작업

- Vite + React 프로젝트 생성
- Tailwind CSS 설정
- shadcn/ui 컴포넌트 설치
- Todo List 컴포넌트 구현
  - TodoInput, TodoList, TodoItem 컴포넌트 생성
  - 할 일 추가/삭제/체크 기능 구현
  - shadcn/ui 컴포넌트 적용

#### 📚 학습 내용

- Vite 프로젝트 설정 방법 학습
- Tailwind CSS와 shadcn/ui 설치 및 설정
- shadcn/ui 컴포넌트 활용 방법
- React 컴포넌트 분리와 구조화

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'feat: Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📜 라이센스

This project is licensed under the MIT License - see the LICENSE file for details

## 📋 추가된 내용

1. 체크리스트 업데이트 (완료된 기능 체크)
   - 기능 구현 상태 실시간 반영
   - 진행 상황 명확히 표시

2. 프로젝트 구조 설명
   - 폴더 구조 상세화
   - 컴포넌트 위치 및 역할 명시

3. 주요 컴포넌트 설명
   - 각 컴포넌트의 핵심 기능 설명
   - 컴포넌트 간 상호작용 방식 안내

4. 저장소 클론부터 시작하는 상세한 설치 방법
   - 초기 설정 과정 상세화
   - 필요한 명령어 안내

5. 기여 방법
   - 코드 기여 프로세스 안내
   - PR 생성 방법 설명

6. 라이센스 정보
   - MIT 라이센스 명시
   - 라이센스 관련 세부사항 안내
