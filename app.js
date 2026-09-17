/* =========================================================
   PORTFOLIO DETAIL DATA
========================================================= */

const portfolioDetails = {


  /* =======================================================
     PROJECTS
  ======================================================= */

  projects: {


    /* -------------------------------------------------------
       CNC
    ------------------------------------------------------- */

    cnc: {

      meta:
        "01 · MANUFACTURING AI · 2025.09 — 2026.06",

      title:
        "CNC 공구 교체 예측 디지털트윈",

      summary:
        "실제 제조 현장의 CNC/MCT 및 PLC 데이터를 분석해 공구 교체 위험을 예측하고, 웹 대시보드와 3D·VR 사용자 경험까지 연결한 통합 프로젝트입니다.",


      links: [

        {
          label: "실시간 CNC 대시보드",
          type: "LIVE DEMO",
          url: "https://test-website-view-2.onrender.com/dashboard"
        },

        {
          label: "요구사항명세서 / 발표자료",
          type: "CANVA",
          url: "https://www.canva.com/design/DAHMKhFF5CQ/ZzUkKlmH4GiFML5hqqRQNw/view"
        }

      ],


      media: [

        {
          type: "image",
          src: "assets/images/project-cnc-screen1.png",
          label: "웹 대시보드"
        },

        {
          type: "image",
          src: "assets/images/project-cnc-screen2.png",
          label: "3D 시각화"
        },

        {
          type: "video",
          src: "assets/videos/projects/cnc-demo.mp4",
          poster: "assets/images/project-cnc-screen1.png",
          label: "시연 영상"
        }

      ],


      sections: [

        {
          title: "프로젝트 개요",
          html: `
            <p>
              실제 공장의 CNC/MCT 설비 데이터를 활용해
              공구 교체 시점을 예측하고,
              운영자가 설비 상태와 예측 결과를 확인할 수 있는
              제조 데이터 기반 서비스를 개발했습니다.
            </p>
          `
        },


        {
          title: "문제 정의",
          html: `
            <p>
              공구 사용량이 누적되어 교체 시점을 지나면
              불량 가능성이 높아질 수 있지만,
              실제 현장에서는 설비 데이터 접근성과
              수집 비용, 운영 조건까지 함께 고려해야 했습니다.
            </p>
          `
        },


        {
          title: "담당 역할",
          html: `
            <ul>
              <li>설비 데이터 구조 분석</li>
              <li>학습 데이터 구성 및 전처리</li>
              <li>AI 예측 모델 구현</li>
              <li>Flask 기반 웹 서비스 개발</li>
              <li>Three.js 3D 시각화</li>
              <li>Unreal Engine VR 콘텐츠 제작</li>
            </ul>
          `
        },


        {
          title: "데이터",
          html: `
            <ul>
              <li>약 5초 간격으로 수집되는 설비 데이터 분석</li>
              <li>공구 번호 · 사용량 · 한계값 · RPM · 부하 등 변수 확인</li>
              <li>공구 교체 전후 값 변화와 교체 이벤트 정의</li>
              <li>30분 이내 교체 여부 예측용 데이터 구성</li>
            </ul>
          `
        },


        {
            title: "System Architecture",

            html: `
                <div class="modal-system-flow">

                <div class="modal-flow-item">
                    <span class="modal-flow-number">01</span>

                    <div>
                    <strong>CNC / MCT 설비</strong>
                    <p>
                        공구 사용량, RPM, 부하율,
                        생산량, 설비 상태 등의
                        현장 데이터 발생
                    </p>
                    </div>
                </div>


                <div class="modal-flow-arrow">
                    ↓
                </div>


                <div class="modal-flow-item">
                    <span class="modal-flow-number">02</span>

                    <div>
                    <strong>MSSQL</strong>
                    <p>
                        약 5초 주기로 수집된
                        설비 데이터를 조회하고
                        학습·서비스용 데이터로 정리
                    </p>
                    </div>
                </div>


                <div class="modal-flow-arrow">
                    ↓
                </div>


                <div class="modal-flow-item">
                    <span class="modal-flow-number">03</span>

                    <div>
                    <strong>AI Prediction</strong>
                    <p>
                        PyTorch 기반 예측 모델을 이용해
                        공구 교체 위험과
                        관련 지표 계산
                    </p>
                    </div>
                </div>


                <div class="modal-flow-arrow">
                    ↓
                </div>


                <div class="modal-flow-item">
                    <span class="modal-flow-number">04</span>

                    <div>
                    <strong>Flask API / Dashboard</strong>
                    <p>
                        예측 결과와 설비 상태를
                        웹 API와 대시보드를 통해
                        운영자가 확인할 수 있도록 제공
                    </p>
                    </div>
                </div>


                <div class="modal-flow-arrow">
                    ↓
                </div>


                <div class="modal-flow-item">
                    <span class="modal-flow-number">05</span>

                    <div>
                    <strong>Three.js / Unreal Engine</strong>
                    <p>
                        설비 상태를 3D로 시각화하고
                        공구 교체 과정을 VR 체험으로
                        확장
                    </p>
                    </div>
                </div>

                </div>
            `
            },


        {
          title: "서비스",
          html: `
            <ul>
              <li>Flask API를 통한 예측 결과 제공</li>
              <li>설비 상태 · 가동률 · 생산량 · 프로그램 정보 시각화</li>
              <li>공구 사용량과 교체 위험 표시</li>
              <li>설비별 웹 대시보드 구현</li>
            </ul>
          `
        },


        {
          title: "XR 확장",
          html: `
            <ul>
              <li>Unreal Engine 기반 작업 체험 시나리오 제작</li>
              <li>태블릿 확인 → 설비 정지 → 문 개방 → 공구 교체 → 재가동 흐름 구성</li>
              <li>데이터 시각화와 작업 절차를 공간 기반 경험으로 연결</li>
            </ul>
          `
        },


        {
          title: "배운 점",
          html: `
            <p>
              AI 모델의 성능만 높이는 것이 실제 적용을 의미하지는 않았습니다.
              데이터 접근 비용, 수집 기간, 통신 방식,
              현장 작업자의 요구와 설비 안전 조건까지
              함께 고려해야 실제 제조 환경에서
              사용할 수 있는 시스템이 된다는 점을 경험했습니다.
            </p>
          `
        }

      ],


      tags: [
        "Python",
        "PyTorch",
        "Pandas",
        "MSSQL",
        "Flask",
        "Three.js",
        "Unreal Engine",
        "Digital Twin"
      ]

    },



    /* -------------------------------------------------------
       ENSO
    ------------------------------------------------------- */

    enso: {

      meta:
        "02 · AI / TIME SERIES · 2026.04 — 2026.06",

      title:
        "LSTM 기반 엘니뇨·라니냐 예측",

      summary:
        "NOAA ENSO 시계열 데이터를 바탕으로 엘니뇨·중립·라니냐 상태와 향후 발생 가능 시기를 예측하는 웹 분석 서비스를 개발했습니다.",


      links: [

        {
          label: "ENSO 예측 웹 서비스",
          type: "LIVE DEMO",
          url: "https://enso-lstm-api.onrender.com/"
        },

        {
          label: "Deep Learning Portfolio",
          type: "PROJECT PAGE",
          url: "https://lihad-xr.github.io/deeplearning-portfolio/"
        }

      ],


      media: [

        {
          type: "image",
          src: "assets/images/project-lstm-portfolio.png",
          label: "제작 과정"
        },

        {
          type: "image",
          src: "assets/images/project-lstm-web.png",
          label: "분석 화면"
        }

      ],


      sections: [

        {
          title: "프로젝트 개요",
          html: `
            <p>
              NOAA ENSO 데이터를 기반으로
              Niño 1+2 · 3 · 4 · 3.4 anomaly와
              ONI-like 지표를 구성하고,
              LSTM을 이용해 ENSO 상태를 예측했습니다.
            </p>
          `
        },


        {
          title: "담당 역할",
          html: `
            <ul>
              <li>데이터 수집 및 전처리</li>
              <li>LSTM 모델 설계 · 학습 · 평가</li>
              <li>미래 Feature 예측 구조 설계</li>
              <li>FastAPI 기반 웹 분석 서비스 구현</li>
            </ul>
          `
        },


        {
          title: "모델링",
          html: `
            <ul>
              <li>시간 순서를 유지한 Train / Test 분할</li>
              <li>클래스 불균형 대응을 위한 class weight 적용</li>
              <li>향후 1~9개월 Feature 재귀 예측</li>
              <li>장기 예측 시 오차 누적 고려</li>
            </ul>
          `
        },


        {
          title: "결과",
          html: `
            <ul>
              <li>Accuracy 0.8971</li>
              <li>Macro F1 0.8978</li>
              <li>예측 확률 시각화</li>
              <li>ONI-like 그래프와 실제값 비교 기능 구현</li>
            </ul>
          `
        },


        {
          title: "배운 점",
          html: `
            <p>
              시계열 모델은 일반적인 랜덤 분할과 다르게
              시간적 정보 누수를 방지해야 하며,
              장기 재귀 예측에서는 오차 누적 특성을
              결과 해석 단계에서도 고려해야 한다는 점을 배웠습니다.
            </p>
          `
        }

      ],


      tags: [
        "Python",
        "LSTM",
        "Time Series",
        "FastAPI",
        "NOAA",
        "Data Visualization"
      ]

    },



    /* -------------------------------------------------------
       별신굿
    ------------------------------------------------------- */

    byeolsingut: {

      meta:
        "03 · VR / GAME · 2025.05 — 2025.09",

      title:
        "Meta Quest 3 VR 공포게임 「별신굿」",

      summary:
        "한국 전통 공포 요소와 VR 특유의 공간 몰입감을 결합한 공포·미스터리 게임으로, 4인 팀 팀장을 맡아 주요 시스템과 VR 인터랙션을 구현했습니다.",


      links: [

        {
          label: "메타버스 개발자 경진대회 출품작",
          type: "OFFICIAL PAGE",
          url: "https://www.metaversedev.kr/gallery_2025/%EB%B3%84%EC%8B%A0%EA%B5%BF-%EB%B3%84%EC%8B%A0%EA%B5%BF"
        }

      ],


      media: [

        {
          type: "image",
          src: "assets/images/project-byeolsingut-screen.png",
          label: "VR 화면"
        },

        {
          type: "video",
          src: "assets/videos/projects/ByeolsingutTrailer.mp4",
          poster: "assets/images/project-byeolsingut-hero.png",
          label: "플레이 영상"
        }

      ],


      sections: [

        {
          title: "프로젝트 개요",
          html: `
            <p>
              한국 전통 공포 요소를 활용해
              Meta Quest 3에서 플레이할 수 있는
              VR 공포·미스터리 콘텐츠를 개발했습니다.
            </p>
          `
        },


        {
          title: "역할",
          html: `
            <ul>
              <li>4인 팀 팀장</li>
              <li>전체 일정 및 역할 관리</li>
              <li>Unreal Engine 주요 기능 구현</li>
              <li>VR 인터랙션 개발</li>
            </ul>
          `
        },


        {
          title: "게임 구조",
          html: `
            <ul>
              <li>튜토리얼</li>
              <li>미로 및 추격</li>
              <li>아이템 및 인벤토리</li>
              <li>병풍 소각 기믹</li>
              <li>책 퍼즐 · 열쇠 · 부적 기믹</li>
            </ul>
          `
        },


        {
          title: "최적화",
          html: `
            <ul>
              <li>Quest 3 실기기에서 OVR Metrics Tool 활용</li>
              <li>LOD / HLOD 적용</li>
              <li>메시 병합</li>
              <li>라이팅 및 렌더링 비용 최적화</li>
              <li>메인 플레이 평균 71~73 FPS 수준 확보</li>
            </ul>
          `
        },


        {
          title: "성과",
          html: `
            <p>
              2025 메타버스 개발자 경진대회에서
              3차 발표 및 시연 단계까지 진출했습니다.
              기능 구현뿐 아니라 VR 실기기 성능과
              사용자 조작 편의성까지 함께 고려했습니다.
            </p>
          `
        }

      ],


      tags: [
        "Unreal Engine",
        "Blueprint",
        "Meta Quest 3",
        "VR",
        "Optimization",
        "Game Design"
      ]

    },



    /* -------------------------------------------------------
       MR Auction
    ------------------------------------------------------- */

    "mr-auction": {

      meta:
        "04 · MR / SERVICE · 2024.05 — 2024.06",

      title:
        "MR Auction",

      summary:
        "직접 경매장에 방문하지 않아도 실제 공간에서 상품을 3D로 확인하고 입찰할 수 있는 혼합현실 기반 경매 서비스 프로토타입입니다.",


      media: [

        {
          type: "image",
          src: "assets/images/project-MR-product.png",
          label: "MR 화면"
        },

        {
          type: "video",
          src: "assets/videos/projects/MR Auction.mp4",
          poster: "assets/images/project-byeolsingut-hero.png",
          label: "플레이 영상"
        }

      ],


      sections: [

        {
          title: "프로젝트 개요",
          html: `
            <p>
              상품을 실제 크기와 공간감으로 확인한 뒤
              바로 입찰할 수 있는 Mixed Reality 기반
              온라인 경매 서비스를 설계했습니다.
            </p>
          `
        },


        {
          title: "역할",
          html: `
            <ul>
              <li>4인 팀 팀장</li>
              <li>서비스 기획</li>
              <li>요구사항 정의</li>
              <li>서비스 Flow 설계</li>
              <li>UI / UX 및 Unity 구현</li>
            </ul>
          `
        },


        {
          title: "서비스 흐름",
          html: `
            <ul>
              <li>판매자별 경매방</li>
              <li>상품 목록 및 경매 대기</li>
              <li>익명 고객 번호 부여</li>
              <li>입찰 여부 및 가격 입력</li>
              <li>최고 입찰가 공개</li>
              <li>낙찰 결과 표시</li>
            </ul>
          `
        },


        {
          title: "3D / MR",
          html: `
            <p>
              Blender로 도자기, 명화, 주택 등의
              3D 콘텐츠를 제작하고
              Unity MR Template을 이용해
              Quest 3 환경에 적용했습니다.
            </p>
          `
        },


        {
          title: "배운 점",
          html: `
            <p>
              기능 구현부터 시작하기보다
              사용자가 어떤 문제를 겪고 있는지 정의한 뒤
              요구사항, UI, 서비스 로직,
              3D 공간 경험을 연결하는 과정의 중요성을 경험했습니다.
            </p>
          `
        }

      ],


      tags: [
        "Unity",
        "Mixed Reality",
        "Quest 3",
        "Blender",
        "UX",
        "Service Design"
      ]

    },



    /* -------------------------------------------------------
       VIRTUAL STUDIO
    ------------------------------------------------------- */

    "virtual-studio": {

      meta:
        "05 · VIRTUAL PRODUCTION · 2025",

      title:
        "버추얼 스튜디오 캐릭터 PV 「연(緣)」",

      summary:
        "Unreal Engine 기반 버추얼 스튜디오 환경에서 조선시대와 현대를 넘나드는 판타지 캐릭터 PV를 제작했습니다. 팀장으로 맵 개발·디자인, VFX 제작, 카메라 연출과 전체 영상 감독을 담당했습니다.",


      media: [

        {
          type: "image",
          src: "assets/images/project-연-hero.png",
          label: "대표 장면"
        },

        {
          type: "image",
          src: "assets/images/project-연-filmingSet.jpg",
          label: "버추얼 스튜디오 환경"
        },

        {
          type: "image",
          src: "assets/images/project-연-scene.png",
          label: "VFX · 마법진 연출"
        },

        {
          type: "video",
          src: "assets/videos/projects/2조_2wice_연.mp4",
          poster: "assets/images/project-연-hero.png",
          label: "PV 영상"
        }

      ],


      sections: [

        {
          title: "프로젝트 개요",
          html: `
            <p>
              약 3분 분량의 판타지·액션·로맨스 캐릭터 PV로,
              시공간을 이동하는 불로불사 마법사의 서사와 능력을
              버추얼 스튜디오 환경에서 시각화했습니다.
            </p>
          `
        },


        {
          title: "담당 역할",
          html: `
            <ul>
              <li>5인 팀 팀장 및 프로젝트 진행 총괄</li>
              <li>Unreal Engine 맵 개발 및 디자인</li>
              <li>Niagara 기반 이펙트 효과 제작</li>
              <li>시퀀스 제작 및 카메라 배치</li>
              <li>전체 영상 감독 및 연출</li>
            </ul>
          `
        },


        {
          title: "환경 구성",
          html: `
            <ul>
              <li>조선시대 공간과 현대 도시 공간 구성</li>
              <li>불타는 한옥 등 장면별 CG 배경 제작</li>
              <li>과거와 현대를 오가는 시공간 전환 연출</li>
              <li>배우 촬영을 고려한 버추얼 스튜디오용 공간 설계</li>
            </ul>
          `
        },


        {
          title: "VFX / 연출",
          html: `
            <ul>
              <li>한국 전통 문양을 활용한 마법진 디자인 및 연출</li>
              <li>불 · 시간 이동 · 공간 이동을 표현하는 시각 효과 구성</li>
              <li>조명과 발광 효과를 활용한 마법진 강조</li>
              <li>슬로모션 · 줌 · 회전 카메라를 활용한 시네마틱 연출</li>
            </ul>
          `
        },


        {
          title: "제작 방식",
          html: `
            <p>
              Unreal Engine에서 버추얼 스튜디오용 3D 환경과
              시각 효과를 제작하고 장면과 카메라를 구성했습니다.
              실제 촬영 단계에서는 별도의 촬영 프로그램을 활용해
              배우와 가상 환경을 결합하여 영상을 제작했습니다.
            </p>
          `
        },


        {
          title: "배운 점",
          html: `
            <p>
              실시간 3D 환경을 제작하는 것에서 끝나지 않고,
              실제 촬영에서 카메라에 어떻게 보이는지와 배우의 동선,
              VFX의 위치와 타이밍까지 함께 고려해야 한다는 점을 경험했습니다.
              환경 제작과 영상 연출을 하나의 제작 흐름으로 설계하는 과정을 익혔습니다.
            </p>
          `
        }

      ],


      tags: [
        "Unreal Engine",
        "Virtual Production",
        "Niagara",
        "VFX",
        "Cinematic",
        "3D Environment",
        "Directing"
      ]

    },



    /* -------------------------------------------------------
       ML Agents
    ------------------------------------------------------- */

    "ml-agents": {

      meta:
        "06 · REINFORCEMENT LEARNING · 2024.09 — 2024.12",

      title:
        "Unity ML-Agents 리듬게임 자동 플레이",

      summary:
        "강화학습 Agent를 리듬게임에 적용해 사람이 직접 조작하지 않아도 Agent가 게임을 수행하도록 학습 환경을 구성했습니다.",


      media: [

        {
          type: "video",
          src: "assets/videos/projects/Unity ML-Agents.mp4",
          poster: "assets/images/project-mlagent-hero.png",
          label: "PV 영상"
        }

      ],


      sections: [

        {
          title: "프로젝트 개요",
          html: `
            <p>
              Unity ML-Agents를 이용해
              Agent가 게임 환경의 상태를 관찰하고,
              행동을 선택하며,
              보상을 통해 반복 학습할 수 있도록
              리듬게임 환경을 구성했습니다.
            </p>
          `
        },


        {
          title: "구현",
          html: `
            <ul>
              <li>Unity 게임 환경 구성</li>
              <li>ML-Agent 적용</li>
              <li>리듬게임 로직과 Agent 연결</li>
              <li>학습 Agent 자동 플레이 구현</li>
            </ul>
          `
        },


        {
          title: "학습",
          html: `
            <p>
              강화학습에서는 모델 구조뿐 아니라
              상태, 행동, 보상과 학습 환경을
              어떻게 정의하느냐가 Agent 동작에
              직접 영향을 준다는 점을 경험했습니다.
            </p>
          `
        }

      ],


      tags: [
        "Unity",
        "ML-Agents",
        "Reinforcement Learning",
        "Agent",
        "Game AI"
      ]

    },



    /* -------------------------------------------------------
       IMAGE PROCESSING
    ------------------------------------------------------- */

    "image-processing": {

      meta:
        "07 · IMAGE PROCESSING · 2025.03 — 2025.04",

      title:
        "Digital Image Processing",

      summary:
        "PyQt5와 Pillow 기반 이미지 처리 프로그램을 분석하고, 다양한 영상처리 알고리즘과 편집 기능, Super Resolution 기능을 추가했습니다.",


      links: [

        {
          label: "Digital Image Processing 자료",
          type: "CANVA",
          url: "https://canva.link/digital-image-processing"
        },
        {
          label: "Digital Image Processing 웹",
          type: "WEB",
          url: "https://digital-image-processing-g59a.onrender.com/"
        }


      ],


      media: [

        {
          type: "image",
          src: "assets/images/project-digitalImageProcessing-hero.png",
          label: "프로그램 UI"
        }

      ],


      sections: [

        {
          title: "프로젝트 개요",
          html: `
            <p>
              기존 이미지 처리 GUI 프로그램의 구조를 분석한 뒤
              영상처리 기능과 UI를 개선하고
              신규 편집 및 AI 기반 기능을 추가했습니다.
            </p>
          `
        },


        {
          title: "영상 처리",
          html: `
            <ul>
              <li>Gray · Binary</li>
              <li>Histogram Equalization</li>
              <li>Gaussian Filter</li>
              <li>Sobel · Laplacian</li>
              <li>LoG / DoG</li>
            </ul>
          `
        },


        {
          title: "기능 개선",
          html: `
            <ul>
              <li>대형 이미지 자동 축소</li>
              <li>회전 · 뒤집기</li>
              <li>Draw 기능</li>
              <li>Super Resolution AI Filter</li>
            </ul>
          `
        },


        {
          title: "성능 분석",
          html: `
            <p>
              반복 픽셀 연산과 그래프 재생성 과정에서
              성능 병목을 확인했으며,
              NumPy 배열 연산과 Canvas 재사용,
              GPU 활용 가능성을 검토했습니다.
            </p>
          `
        }

      ],


      tags: [
        "Python",
        "PyQt5",
        "Pillow",
        "Image Processing",
        "Super Resolution"
      ]

    },



    /* -------------------------------------------------------
       DATABASE
    ------------------------------------------------------- */

    "customs-db": {

      meta:
        "08 · DATABASE · 2024.09 — 2024.12",

      title:
        "관세사무소 수출통관 DB 설계",

      summary:
        "실제 수출통관 업무를 분석해 반복되는 거래 정보를 효율적으로 저장하고 검색할 수 있는 관계형 데이터베이스를 설계했습니다.",


      links: [

        {
          label: "관세사무소 수출통관 DB 자료",
          type: "CANVA",
          url: "https://canva.link/custons-brokerage"
        }

      ],


      media: [

        {
          type: "image",
          src: "assets/images/project-SQL.png",
          label: "DB 구조"
        },

        {
          type: "image",
          src: "assets/images/project-SQL-flow.png",
          label: "flow"
        }

      ],


      sections: [

        {
          title: "프로젝트 개요",
          html: `
            <p>
              관세사무소의 실제 수출신고 흐름을 분석하고
              반복되는 고객 및 거래 데이터를
              효율적으로 검색·재사용할 수 있도록
              관계형 데이터베이스 구조를 설계했습니다.
            </p>
          `
        },


        {
          title: "설계 대상",
          html: `
            <ul>
              <li>수출자 · 제조자</li>
              <li>구매자</li>
              <li>목적국</li>
              <li>HS Code</li>
              <li>거래품명</li>
              <li>수출신고 데이터</li>
            </ul>
          `
        },


        {
          title: "설계 과정",
          html: `
            <ul>
              <li>업무 요구사항 정의</li>
              <li>개념 ERD 설계</li>
              <li>릴레이션 스키마 설계</li>
              <li>정규화</li>
              <li>물리 ERD 구성</li>
            </ul>
          `
        },


        {
          title: "SQL",
          html: `
            <ul>
              <li>HS Code 빈도 조회</li>
              <li>표준품명 · 거래품명 JOIN</li>
              <li>조건 기반 과거 거래 조회</li>
              <li>기존 거래 정보 재사용 구조</li>
            </ul>
          `
        }

      ],


      tags: [
        "SQL",
        "ERD",
        "Database",
        "Normalization",
        "Business Analysis"
      ]

    },



    /* -------------------------------------------------------
       RASPBERRY PI
    ------------------------------------------------------- */

    raspberry: {

      meta:
        "09 · EDGE AI / AUTONOMOUS DRIVING · 2025.12",

      title:
        "Raspberry Pi 기반 AI 자율주행",

      summary:
        "Raspberry Pi 기반 자율주행 미니카를 구성하고, 주행 데이터 수집부터 CNN 모델 학습과 실제 차량 추론까지 전체 흐름을 실습했습니다.",


      media: [

        {
          type: "image",
          src: "assets/images/project-RaspberryPi.jpg",
          label: "자율주행 차량"
        },

      ],


      sections: [

        {
          title: "프로젝트 개요",
          html: `
            <p>
              Raspberry Pi 기반 AI 자율주행 미니카를 조립하고
              카메라 데이터 수집,
              CNN 학습,
              모델 탑재 및 실제 주행까지
              전체 파이프라인을 실습했습니다.
            </p>
          `
        },


        {
          title: "환경 구축",
          html: `
            <ul>
              <li>Raspberry Pi OS 설치</li>
              <li>SSH 원격 접속 환경 구성</li>
              <li>VNC 원격 GUI 환경 구성</li>
              <li>카메라 연결 및 테스트</li>
            </ul>
          `
        },


        {
          title: "차량 제어",
          html: `
            <ul>
              <li>Python 기반 모터 방향 제어</li>
              <li>속도 제어</li>
              <li>모터 캘리브레이션</li>
              <li>수동 주행을 통한 데이터 수집</li>
            </ul>
          `
        },


        {
          title: "AI 학습",
          html: `
            <ul>
              <li>OpenCV 기반 카메라 데이터 처리</li>
              <li>지도학습용 주행 데이터 수집</li>
              <li>Google Colab CNN 모델 학습</li>
              <li>학습 모델 Raspberry Pi 적용</li>
            </ul>
          `
        },


        {
          title: "결과",
          html: `
            <p>
              학습한 CNN 모델을 실제 차량에 적용하고
              실습 트랙에서 카메라 입력을 기반으로
              자율주행 추론 및 주행을 수행했습니다.
            </p>
          `
        }

      ],


      tags: [
        "Raspberry Pi",
        "Python",
        "OpenCV",
        "CNN",
        "Edge AI",
        "Motor Control"
      ]

    }

  },



  /* =======================================================
     AWARDS
  ======================================================= */

  awards: {


    /* -------------------------------------------------------
       EXCAVATE
    ------------------------------------------------------- */

    excavate: {

      meta:
        "2026 · 한국게임학회 × 넥슨게임즈 · 특선",

      title:
        "3D Art 「Excavate After²」",

      summary:
        "인간이 만들어낸 기술과 AI가 세계를 지배한 뒤, 다시 긴 시간이 흘러 기계 문명조차 자연 속 유적으로 남게 된 미래를 상상해 제작한 3D 작품입니다.",


      media: [

        {
          type: "image",
          src: "assets/images/awards-Excavate After².jpg",
          label: "대표 렌더"
        },

      ],


      sections: [

        {
          title: "수상",
          html: `
            <p>
              2026 한국게임학회 × 넥슨게임즈
              전국 대학생 디지털 아트 공모전 특선
            </p>
          `
        },


        {
          title: "작품 개요",
          html: `
            <p>
              현재 우리가 최첨단이라 여기는 기술과 기계 문명이
              오랜 시간이 흐른 뒤 자연에 동화되고,
              결국 잊힌 유산이 된 모습을 표현했습니다.
            </p>
          `
        },


        {
          title: "제작",
          html: `
            <ul>
              <li>작품 콘셉트 및 세계관 기획</li>
              <li>3D 모델링</li>
              <li>오브젝트 배치</li>
              <li>재질 및 라이팅 구성</li>
              <li>카메라 구도 설계</li>
            </ul>
          `
        },


        {
          title: "상징 표현",
          html: `
            <p>
              로봇의 손 위에 놓인 큐브는
              인간이 자신보다 더 큰 통제 구조 안에 놓여 있으면서도
              이를 인식하지 못하는 모습을 상징합니다.
              기계 문명의 잔해와 자연의 대비를 통해
              기술 문명의 유한성을 표현했습니다.
            </p>
          `
        }

      ],


      tags: [
        "Blender",
        "3D Art",
        "Storytelling",
        "Lighting",
        "Composition"
      ]

    },



    /* -------------------------------------------------------
       STARLIGHT
    ------------------------------------------------------- */

    starlight: {

      meta:
        "2025 · 한국영상학회 Next Generation · 최우수",

      title:
        "위치 기반 AR 기능성 게임 「별빛 수거단」",

      summary:
        "도시 쓰레기 문제를 시민 참여형 게임으로 해결하고, 사용자의 활동 데이터를 도시 운영과 행정에 다시 활용하도록 설계한 서비스입니다.",


      links: [

        {
          label: "별빛 수거단 기획 · 발표자료",
          type: "CANVA",
          url: "https://canva.link/star-cleaners"
        }

      ],


      media: [

        {
          type: "image",
          src: "assets/images/awards-StarCleaners.png",
          label: "기획 이미지"
        },

        {
          type: "image",
          src: "assets/images/awards-StarCleaners-uiux.png",
          label: "서비스 구조"
        },

        {
          type: "image",
          src: "assets/images/awards-StarCleaners-AI.png",
          label: "AI 구조"
        },

        {
          type: "video",
          src: "assets/videos/awards/별빛 수거단.mp4",
          poster: "assets/images/awards-StarCleaners-video.png",
          label: "광고"
        }

      ],


      sections: [

        {
          title: "수상",
          html: `
            <p>
              2025 한국영상학회 가을 학술대회
              Next Generation 최우수
            </p>
          `
        },


        {
          title: "문제 정의",
          html: `
            <p>
              도시 쓰레기 문제를 단순 캠페인이 아니라
              시민이 직접 참여하고 보상을 얻는
              위치 기반 기능성 게임으로 해결하고자 했습니다.
            </p>
          `
        },


        {
          title: "핵심 기능",
          html: `
            <ul>
              <li>GPS 기반 구역별 별 레벨</li>
              <li>청소 전·후 사진 인증</li>
              <li>Star Bin 기반 이중 인증</li>
              <li>개인 · 공용 보상</li>
              <li>골든타임 시스템</li>
            </ul>
          `
        },


        {
          title: "데이터 활용",
          html: `
            <ul>
              <li>쓰레기 발생 히트맵</li>
              <li>청소 인력 동선 분석</li>
              <li>청소 차량 동선 분석</li>
              <li>쓰레기통 설치 위치 선정 활용</li>
            </ul>
          `
        },


        {
          title: "실행안",
          html: `
            <p>
              마포구 서교동·연남동을 대상으로
              시범사업 형태를 설계하고
              약 2천만 원 규모의 예산안까지 구성해
              실제 서비스 운영 가능성을 함께 제시했습니다.
            </p>
          `
        }

      ],


      tags: [
        "AR",
        "Location Based",
        "Game Design",
        "Service Planning",
        "Data Platform"
      ]

    },



    /* -------------------------------------------------------
       RAG AWARD
    ------------------------------------------------------- */

    "rag-award": {

      meta:
        "2025 · 한국디지털콘텐츠학회 · 동상",

      title:
        "RAG · CAG 구조 및 성능 비교 연구",

      summary:
        "RAG와 CAG의 구조를 직접 구현하고 정확도, 최신성, 응답시간 등 여러 성능 지표를 비교한 연구입니다.",


      links: [

        {
          label: "RAG · CAG 연구 발표자료",
          type: "CANVA",
          url: "https://canva.link/rag-cag"
        }

      ],


      media: [

        {
          type: "image",
          src: "assets/images/project-ragtag-graph2.png",
          label: "연구 구조"
        },

        {
          type: "image",
          src: "assets/images/project-ragtag-application.png",
          label: "연구 결과"
        }

      ],


      sections: [

        {
          title: "수상",
          html: `
            <p>
              2025 한국디지털콘텐츠학회
              대학생 논문 경진대회 동상
            </p>
          `
        },


        {
          title: "연구 내용",
          html: `
            <ul>
              <li>RAG 검색 구조 구현</li>
              <li>CAG 캐싱 구조 구현</li>
              <li>정확도 · 응답시간 · 최신성 비교</li>
              <li>하이브리드 구조 제안</li>
            </ul>
          `
        },


        {
          title: "결과",
          html: `
            <ul>
              <li>RAG 정확도 0.92</li>
              <li>RAG 최신성 0.91</li>
              <li>CAG 응답시간 약 900ms</li>
            </ul>
          `
        },


        {
          title: "피드백",
          html: `
            <p>
              평가 과정에서 더 많은 데이터와
              긴 실험 기간이 필요하다는 피드백을 받으며,
              연구 결과의 신뢰성을 판단할 때
              모델 수치뿐 아니라 검증 규모와 재현성도
              함께 고려해야 한다는 점을 배웠습니다.
            </p>
          `
        }

      ],


      tags: [
        "RAG",
        "CAG",
        "LLM",
        "Embedding",
        "Research"
      ]

    },



    /* -------------------------------------------------------
       PRAYERS
    ------------------------------------------------------- */

    prayers: {

      meta:
        "2025 · 경남콘텐츠페어 AI 영상 공모전 · 추천상",

      title:
        "「Prayers」 Ending Music Video",

      summary:
        "웹툰 「Prayers」의 애니메이션화를 가정해, 각 화 엔딩에 삽입될 생성형 AI 기반 뮤직비디오를 제작했습니다.",


      links: [

        {
          label: "Prayers 작품 자료",
          type: "CANVA",
          url: "https://canva.link/faithless"
        }

      ],


      media: [

        {
          type: "image",
          src: "assets/images/awards-Faithless-text.png",
          label: "MV 이미지"
        },

        {
          type: "youtube",
          url: "https://www.youtube.com/watch?v=BUpTLctTZCI",
          label: "Prayers 전체 MV"
        }

      ],


      sections: [

        {
          title: "수상",
          html: `
            <p>
              2025 경남콘텐츠페어
              AI 영상 공모전 추천상
            </p>
          `
        },


        {
          title: "콘셉트",
          html: `
            <p>
              ‘신에게 버림받은 기도자의 분노와 체념’을
              핵심 감정으로 설정하고,
              Dark J-pop과 Anime Ending 스타일로
              전체 영상의 분위기를 구성했습니다.
            </p>
          `
        },


        {
          title: "제작",
          html: `
            <ul>
              <li>직접 가사 작성</li>
              <li>SUNO 기반 음악 제작</li>
              <li>스토리보드 및 콘티 구성</li>
              <li>ComfyUI 이미지 · 영상 생성</li>
            </ul>
          `
        },


        {
          title: "후반 작업",
          html: `
            <ul>
              <li>색보정</li>
              <li>그레인 · 노이즈</li>
              <li>컷 편집</li>
              <li>슬로우 줌</li>
              <li>페이드 효과</li>
            </ul>
          `
        },


        {
          title: "성과",
          html: `
            <p>
              생성형 AI 결과물을 그대로 사용하는 것이 아니라
              반복 생성과 선별, 편집을 통해
              원래 기획한 감정과 서사에 맞는
              하나의 완성된 MV로 구성했습니다.
            </p>
          `
        }

      ],


      tags: [
        "ComfyUI",
        "SUNO",
        "Generative AI",
        "Video Editing",
        "Storyboarding"
      ]

    },



    /* -------------------------------------------------------
       DREAM TREE
    ------------------------------------------------------- */

    "dream-tree": {

      meta:
        "2024 · 한국융합학회 ICCT2024 · 우수상",

      title:
        "2D 기능성 게임 「꿈을 꾸는 나무」",

      summary:
        "꿈이 없는 청소년의 증가를 사회문제로 설정하고, 사용자가 직접 선택하고 그 결과를 경험하도록 구성한 Unity 기반 기능성 게임입니다.",


      media: [

        {
          type: "image",
          src: "assets/images/awards-dotGame-hero.png",
          label: "게임 화면"
        },

        {
          type: "image",
          src: "assets/images/awards-dotGame-stage1.png",
          label: "게임 화면"
        },

        {
          type: "image",
          src: "assets/images/awards-dotGame-stage2.png",
          label: "게임 화면"
        },

        {
          type: "video",
          src: "assets/videos/awards/꿈을 꾸는 나무_happy.mp4",
          poster: "assets/images/awards-dotGame-start.png",
          label: "게임 플레이 영상"
        }

      ],


      sections: [

        {
          title: "수상",
          html: `
            <p>
              한국융합학회 ICCT2024
              캡스톤 디자인 대학생 경진대회 우수상
            </p>
          `
        },


        {
          title: "기획",
          html: `
            <p>
              청소년이 꿈을 잃게 되는 원인을
              세 가지 상황으로 나누고,
              이를 직접 플레이하도록
              3개 스테이지로 구성했습니다.
            </p>
          `
        },


        {
          title: "게임 구성",
          html: `
            <ul>
              <li>일기 속 숫자 찾기</li>
              <li>오브젝트 배치</li>
              <li>면접형 선택지</li>
              <li>선택 결과에 따른 열쇠 획득</li>
            </ul>
          `
        },


        {
          title: "엔딩",
          html: `
            <p>
              선택 결과에 따라
              흰색과 검은색 열쇠를 획득하며,
              최종 열쇠 조합에 따라
              해피엔딩과 배드엔딩으로 분기되도록 설계했습니다.
            </p>
          `
        },


        {
          title: "의미",
          html: `
            <p>
              사회문제를 설명하는 데 그치지 않고
              사용자가 직접 선택하고 결과를 확인하도록
              게임 시스템으로 전달하는 방법을 경험했습니다.
            </p>
          `
        }

      ],


      tags: [
        "Unity",
        "2D Game",
        "Photoshop",
        "Serious Game",
        "Story Design"
      ]

    }

  }

};



/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* =======================================================
       MOBILE MENU
    ======================================================= */

    const menuButton =
      document.querySelector(
        ".mobile-menu-button"
      );


    const nav =
      document.querySelector(
        ".nav-menu"
      );


    if(
      menuButton &&
      nav
    ){

      menuButton.addEventListener(
        "click",
        () => {

          nav.classList.toggle(
            "open"
          );

        }
      );

    }



    /* =======================================================
       ACTIVE NAVIGATION
    ======================================================= */

    const links =
      document.querySelectorAll(
        ".nav-menu a"
      );


    const sections = [
      ...document.querySelectorAll(
        "main section[id]"
      )
    ];


    const navObserver =
      new IntersectionObserver(

        entries => {

          entries.forEach(
            entry => {

              if(
                !entry.isIntersecting
              ){
                return;
              }


              links.forEach(
                link => {

                  link.classList.toggle(

                    "active",

                    link.getAttribute(
                      "href"
                    ) ===
                    `#${entry.target.id}`

                  );

                }
              );

            }
          );

        },

        {
          rootMargin:
            "-35% 0px -55% 0px"
        }

      );


    sections.forEach(
      section => {

        navObserver.observe(
          section
        );

      }
    );



    /* =======================================================
       REVEAL
    ======================================================= */

    const revealTargets =
      document.querySelectorAll(
        ".reveal"
      );


    const revealObserver =
      new IntersectionObserver(

        entries => {

          entries.forEach(
            entry => {

              if(
                entry.isIntersecting
              ){

                entry.target
                  .classList
                  .add(
                    "visible"
                  );

              }

            }
          );

        },

        {
          threshold:.12
        }

      );


    revealTargets.forEach(
      target => {

        revealObserver.observe(
          target
        );

      }
    );



    /* =======================================================
       CLOSE NAV
    ======================================================= */

    links.forEach(
      link => {

        link.addEventListener(
          "click",
          () => {

            if(nav){

              nav.classList.remove(
                "open"
              );

            }

          }
        );

      }
    );



    /* =======================================================
       MODAL ELEMENTS
    ======================================================= */

    const modal =
      document.getElementById(
        "detail-modal"
      );


    const modalPanel =
      modal.querySelector(
        ".detail-modal-panel"
      );


    const modalTitle =
      document.getElementById(
        "detail-modal-title"
      );


    const modalMeta =
      document.getElementById(
        "detail-modal-meta"
      );


    const modalSummary =
      document.getElementById(
        "detail-modal-summary"
      );


    const modalMedia =
      document.getElementById(
        "modal-main-media"
      );


    const modalThumbnailList =
      document.getElementById(
        "modal-thumbnail-list"
      );


    const modalSections =
      document.getElementById(
        "modal-detail-sections"
      );


    const modalTags =
      document.getElementById(
        "modal-tag-list"
      );

    
    const modalContentColumn =
    modal.querySelector(
        ".modal-content-column"
    );


    let lastFocusedElement =
      null;



    /* =======================================================
       PLACEHOLDER
    ======================================================= */

    function showMediaPlaceholder(
      message,
      path = ""
    ){

      modalMedia.innerHTML = `

        <div class="media-placeholder">

          <strong>
            ${message}
          </strong>

          ${
            path
            ?
            `
              <span>
                ${path}
              </span>
            `
            :
            ""
          }

        </div>

      `;

    }



    /* =======================================================
       YOUTUBE HELPERS
    ======================================================= */

    function getYouTubeVideoId(
      url
    ){

      try{

        const parsedUrl =
          new URL(url);


        if(
          parsedUrl.hostname ===
          "youtu.be"
          ||
          parsedUrl.hostname ===
          "www.youtu.be"
        ){

          return parsedUrl.pathname
            .replace(/^\//, "")
            .split("/")[0] ||
            null;

        }


        if(
          parsedUrl.hostname.includes(
            "youtube.com"
          )
        ){

          if(
            parsedUrl.pathname ===
            "/watch"
          ){

            return parsedUrl.searchParams.get(
              "v"
            );

          }


          if(
            parsedUrl.pathname.startsWith(
              "/shorts/"
            )
          ){

            return parsedUrl.pathname
              .split("/")[2] ||
              null;

          }


          if(
            parsedUrl.pathname.startsWith(
              "/embed/"
            )
          ){

            return parsedUrl.pathname
              .split("/")[2] ||
              null;

          }

        }

      }
      catch(error){

        return null;

      }


      return null;

    }


    function getYouTubeEmbedUrl(
      url
    ){

      const videoId =
        getYouTubeVideoId(url);


      if(!videoId){

        return null;

      }


      return `https://www.youtube.com/embed/${videoId}`;

    }



    /* =======================================================
       MAIN MEDIA
    ======================================================= */

    function renderMainMedia(
      mediaItem
    ){

      modalMedia.innerHTML = "";

      modalMedia.classList.remove(
        "links-mode"
      );


      /*
       * IMAGE
       */

      if(
        mediaItem.type ===
        "image"
      ){

        const image =
          document.createElement(
            "img"
          );


        image.src =
          mediaItem.src;


        image.alt =
          mediaItem.label ||
          "상세 이미지";


        image.addEventListener(
          "error",
          () => {

            showMediaPlaceholder(
              "이미지 파일을 추가하면 이곳에 표시됩니다.",
              mediaItem.src
            );

          },
          {
            once:true
          }
        );


        modalMedia.appendChild(
          image
        );

      }


      /*
       * VIDEO
       */

      else if(
        mediaItem.type ===
        "video"
      ){

        const video =
          document.createElement(
            "video"
          );


        video.controls =
          true;


        video.preload =
          "metadata";


        if(
          mediaItem.poster
        ){

          video.poster =
            mediaItem.poster;

        }


        const source =
          document.createElement(
            "source"
          );


        source.src =
          mediaItem.src;


        source.type =
          "video/mp4";


        video.appendChild(
          source
        );


        source.addEventListener(
          "error",
          () => {

            showMediaPlaceholder(
              "영상 파일을 추가하면 이곳에서 바로 재생됩니다.",
              mediaItem.src
            );

          },
          {
            once:true
          }
        );


        modalMedia.appendChild(
          video
        );

      }


      /*
       * YOUTUBE
       */

      else if(
        mediaItem.type ===
        "youtube"
      ){

        const embedUrl =
          getYouTubeEmbedUrl(
            mediaItem.url
          );


        if(!embedUrl){

          showMediaPlaceholder(
            "YouTube 주소를 확인해주세요.",
            mediaItem.url || ""
          );

          return;

        }


        const iframe =
          document.createElement(
            "iframe"
          );


        iframe.src =
          embedUrl;


        iframe.title =
          mediaItem.label ||
          "YouTube 영상";


        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";


        iframe.allowFullscreen =
          true;


        iframe.setAttribute(
          "loading",
          "lazy"
        );


        /*
         * CSS 파일을 수정하지 않아도
         * 기존 미디어 영역을 꽉 채우도록 설정
         */

        iframe.style.width =
          "100%";


        iframe.style.height =
          "100%";


        iframe.style.display =
          "block";


        iframe.style.border =
          "0";


        iframe.style.background =
          "#0c1f33";


        modalMedia.appendChild(
          iframe
        );

      }


      /*
       * LINKS / RESOURCES
       * 갤러리의 마지막 페이지
       */

      else if(
        mediaItem.type ===
        "links"
      ){

        modalMedia.classList.add(
          "links-mode"
        );


        const page =
          document.createElement(
            "div"
          );


        page.className =
          "modal-links-page";


        const heading =
          document.createElement(
            "div"
          );


        heading.className =
          "modal-links-heading";


        heading.innerHTML = `

          <span class="modal-links-heading-icon">
            ↗
          </span>

          <div class="modal-links-heading-copy">

            <span>
              LINKS / RESOURCES
            </span>

            <h3>
              프로젝트 관련 링크
            </h3>

            <p>
              실제 서비스, 공식 페이지, 문서 및 발표 자료를 확인할 수 있습니다.
            </p>

          </div>

        `;


        const list =
          document.createElement(
            "div"
          );


        list.className =
          "modal-links-list";


        (
          mediaItem.links ||
          []
        ).forEach(
          link => {

            const anchor =
              document.createElement(
                "a"
              );


            anchor.className =
              "modal-links-card";


            anchor.href =
              link.url;


            anchor.target =
              "_blank";


            anchor.rel =
              "noopener noreferrer";


            const icon =
              document.createElement(
                "span"
              );


            icon.className =
              "modal-links-card-icon";


            icon.textContent =
              "↗";


            const copy =
              document.createElement(
                "span"
              );


            copy.className =
              "modal-links-card-copy";


            const label =
              document.createElement(
                "strong"
              );


            label.textContent =
              link.label;


            const type =
              document.createElement(
                "span"
              );


            type.textContent =
              link.type ||
              "EXTERNAL LINK";


            const arrow =
              document.createElement(
                "span"
              );


            arrow.className =
              "modal-links-card-arrow";


            arrow.textContent =
              "↗";


            copy.appendChild(
              label
            );


            copy.appendChild(
              type
            );


            anchor.appendChild(
              icon
            );


            anchor.appendChild(
              copy
            );


            anchor.appendChild(
              arrow
            );


            list.appendChild(
              anchor
            );

          }
        );


        page.appendChild(
          heading
        );


        page.appendChild(
          list
        );


        modalMedia.appendChild(
          page
        );

      }

    }



    /* =======================================================
       MEDIA GALLERY
    ======================================================= */

    function renderMediaGallery(
      mediaItems,
      links = []
    ){

      modalThumbnailList.innerHTML =
        "";


      const galleryItems = [
        ...(
          mediaItems ||
          []
        )
      ];


      /*
       * 관련 링크가 있는 경우
       * 갤러리의 마지막 페이지로 LINKS를 추가
       */

      if(
        links &&
        links.length > 0
      ){

        galleryItems.push(
          {
            type:"links",
            label:"관련 링크",
            links:links
          }
        );

      }


      if(
        galleryItems.length === 0
      ){

        showMediaPlaceholder(
          "등록된 이미지가 없습니다."
        );

        modalThumbnailList.style.display =
          "none";

        return;

      }


      renderMainMedia(
        galleryItems[0]
      );


      /*
       * 이미지/영상/링크 페이지를 합쳐서
       * 한 개뿐일 때만 썸네일 영역 숨김
       */

      if(
        galleryItems.length === 1
      ){

        modalThumbnailList.style.display =
          "none";

      }
      else{

        modalThumbnailList.style.display =
          "flex";

      }


      galleryItems.forEach(
        (
          item,
          index
        ) => {

          const button =
            document.createElement(
              "button"
            );


          button.type =
            "button";


          button.className =
            "modal-thumbnail";


          button.setAttribute(
            "aria-label",
            item.label ||
            `미디어 ${index + 1}`
          );


          if(
            index === 0
          ){

            button.classList.add(
              "active"
            );

          }


          /*
           * IMAGE THUMB
           */

          if(
            item.type ===
            "image"
          ){

            const image =
              document.createElement(
                "img"
              );


            image.src =
              item.src;


            image.alt =
              item.label ||
              "미디어";


            button.appendChild(
              image
            );

          }


          /*
           * VIDEO THUMB
           */

          else if(
            item.type ===
            "video"
          ){

            if(
              item.poster
            ){

              const image =
                document.createElement(
                  "img"
                );


              image.src =
                item.poster;


              image.alt =
                item.label ||
                "영상";


              button.appendChild(
                image
              );

            }


            const label =
              document.createElement(
                "span"
              );


            label.className =
              "modal-thumbnail-video-label";


            label.textContent =
              "VIDEO";


            button.appendChild(
              label
            );

          }


          /*
           * YOUTUBE THUMB
           */

          else if(
            item.type ===
            "youtube"
          ){

            const videoId =
              getYouTubeVideoId(
                item.url
              );


            if(videoId){

              const image =
                document.createElement(
                  "img"
                );


              image.src =
                `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;


              image.alt =
                item.label ||
                "YouTube 영상";


              button.appendChild(
                image
              );

            }


            const label =
              document.createElement(
                "span"
              );


            label.className =
              "modal-thumbnail-video-label";


            label.textContent =
              "YOUTUBE";


            button.appendChild(
              label
            );

          }


          /*
           * LINKS THUMB
           */

          else if(
            item.type ===
            "links"
          ){

            button.classList.add(
              "modal-thumbnail-links"
            );


            const icon =
              document.createElement(
                "span"
              );


            icon.className =
              "modal-thumbnail-links-icon";


            icon.textContent =
              "↗";


            const label =
              document.createElement(
                "span"
              );


            label.className =
              "modal-thumbnail-links-label";


            label.textContent =
              "LINKS";


            button.appendChild(
              icon
            );


            button.appendChild(
              label
            );

          }


          button.addEventListener(
            "click",
            () => {

              modalThumbnailList
                .querySelectorAll(
                  ".modal-thumbnail"
                )
                .forEach(
                  thumb => {

                    thumb.classList.remove(
                      "active"
                    );

                  }
                );


              button.classList.add(
                "active"
              );


              renderMainMedia(
                item
              );

            }
          );


          modalThumbnailList
            .appendChild(
              button
            );

        }
      );

    }



    /* =======================================================
       OPEN MODAL
    ======================================================= */

    function openDetailModal(
      group,
      id,
      trigger
    ){

      const data =
        portfolioDetails[group]?.[id];


      if(
        !data
      ){

        console.warn(
          "상세 데이터를 찾을 수 없습니다:",
          group,
          id
        );

        return;

      }


      lastFocusedElement =
        trigger ||
        document.activeElement;


      /*
       * Header
       */

      modalMeta.textContent =
        data.meta ||
        "";


      modalTitle.textContent =
        data.title ||
        "";


      modalSummary.textContent =
        data.summary ||
        "";


      /*
       * Gallery
       */

      renderMediaGallery(
        data.media ||
        [],
        data.links ||
        []
      );


      /*
       * Detail sections
       */

      modalSections.innerHTML =
        "";


      (
        data.sections ||
        []
      ).forEach(
        section => {

          const article =
            document.createElement(
              "article"
            );


          article.className =
            "modal-detail-section";


          article.innerHTML = `

            <h3>
              ${section.title}
            </h3>

            <div class="modal-detail-content">
              ${section.html}
            </div>

          `;


          modalSections.appendChild(
            article
          );

        }
      );


      /*
       * Tags
       */

      modalTags.innerHTML =
        "";


      (
        data.tags ||
        []
      ).forEach(
        tag => {

          const span =
            document.createElement(
              "span"
            );


          span.textContent =
            tag;


          modalTags.appendChild(
            span
          );

        }
      );


      /*
       * Open
       */

      modal.hidden =
        false;


      document.body.classList.add(
        "modal-open"
      );


      modalPanel.scrollTop =
        0;

      modalContentColumn.scrollTop = 0;


      const closeButton =
        modal.querySelector(
          ".modal-close-button"
        );


      requestAnimationFrame(
        () => {

          closeButton.focus();

        }
      );

    }



    /* =======================================================
       CLOSE MODAL
    ======================================================= */

    function closeDetailModal(){

      if(
        modal.hidden
      ){
        return;
      }


      /*
       * 영상 정지
       */

      modal
        .querySelectorAll(
          "video"
        )
        .forEach(
          video => {

            video.pause();

          }
        );


      /*
       * YouTube 영상 정지
       */

      modal
        .querySelectorAll(
          "iframe"
        )
        .forEach(
          iframe => {

            iframe.src =
              "";

          }
        );


      modal.hidden =
        true;


      document.body.classList.remove(
        "modal-open"
      );


      /*
       * 모달을 열었던 카드로
       * 포커스 복귀
       */

      if(
        lastFocusedElement &&
        typeof lastFocusedElement.focus ===
        "function"
      ){

        lastFocusedElement.focus();

      }

    }



    /* =======================================================
       CARD CLICK
    ======================================================= */

    const detailCards =
      document.querySelectorAll(
        ".clickable-card[data-detail-group][data-detail-id]"
      );


    detailCards.forEach(
      card => {


        /*
         * Mouse
         */

        card.addEventListener(
          "click",
          event => {


            /*
             * 향후 카드 안에 링크나
             * 버튼, 영상 등이 추가될 경우
             * 그 요소 자체의 기능은 유지
             */

            if(
              event.target.closest(
                "a, button, video, input, textarea, select"
              )
            ){

              return;

            }


            openDetailModal(
              card.dataset.detailGroup,
              card.dataset.detailId,
              card
            );

          }
        );



        /*
         * Keyboard
         */

        card.addEventListener(
          "keydown",
          event => {

            if(
              event.key ===
              "Enter"
              ||
              event.key ===
              " "
            ){

              event.preventDefault();


              openDetailModal(
                card.dataset.detailGroup,
                card.dataset.detailId,
                card
              );

            }

          }
        );

      }
    );



    /* =======================================================
       CLOSE BUTTON / BACKDROP
    ======================================================= */

    document
      .querySelectorAll(
        "[data-modal-close]"
      )
      .forEach(
        element => {

          element.addEventListener(
            "click",
            closeDetailModal
          );

        }
      );



    /* =======================================================
       ESC CLOSE
    ======================================================= */

    document.addEventListener(
      "keydown",
      event => {

        if(
          event.key ===
          "Escape"
          &&
          !modal.hidden
        ){

          closeDetailModal();

        }

      }
    );

  }
);