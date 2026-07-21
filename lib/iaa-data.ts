import type { IaaPost, NavItem } from "@/types/iaa";

export const navItems: NavItem[] = [
  {
    label: "Nhà & Nội Thất",
    href: "https://iaa.uk.net/chuyen-muc/nha-noi-that/",
    children: [
      { label: "Thiết kế", href: "https://iaa.uk.net/chuyen-muc/thiet-ke/" },
      { label: "Trang trí", href: "https://iaa.uk.net/chuyen-muc/trang-tri/" },
      { label: "Vật liệu", href: "https://iaa.uk.net/chuyen-muc/vat-lieu/" },
      {
        label: "Review sản phẩm",
        href: "https://iaa.uk.net/chuyen-muc/review-san-pham/",
      },
    ],
  },
  {
    label: "Đời Sống",
    href: "https://iaa.uk.net/chuyen-muc/doi-song/",
    children: [
      { label: "Mẹo hay", href: "https://iaa.uk.net/chuyen-muc/meo-hay/" },
      { label: "Gia đình", href: "https://iaa.uk.net/chuyen-muc/gia-dinh/" },
      {
        label: "Không gian sống",
        href: "https://iaa.uk.net/chuyen-muc/khong-gian-song/",
      },
      { label: "Tiêu dùng", href: "https://iaa.uk.net/chuyen-muc/tieu-dung/" },
    ],
  },
  {
    label: "Giáo Dục",
    href: "https://iaa.uk.net/chuyen-muc/giao-duc/",
    children: [
      { label: "Kỹ năng", href: "https://iaa.uk.net/chuyen-muc/ky-nang/" },
      { label: "Học tập", href: "https://iaa.uk.net/chuyen-muc/hoc-tap/" },
      {
        label: "Công nghệ giáo dục",
        href: "https://iaa.uk.net/chuyen-muc/cong-nghe-giao-duc/",
      },
    ],
  },
  {
    label: "Sức Khỏe",
    href: "https://iaa.uk.net/chuyen-muc/suc-khoe/",
    children: [
      {
        label: "Dinh dưỡng",
        href: "https://iaa.uk.net/chuyen-muc/dinh-duong/",
      },
      { label: "Làm đẹp", href: "https://iaa.uk.net/chuyen-muc/lam-dep/" },
      {
        label: "Chăm sóc sức khỏe",
        href: "https://iaa.uk.net/chuyen-muc/cham-soc-suc-khoe/",
      },
    ],
  },
  {
    label: "Công Nghệ",
    href: "https://iaa.uk.net/chuyen-muc/cong-nghe/",
    children: [
      { label: "AI", href: "https://iaa.uk.net/chuyen-muc/ai/" },
      {
        label: "Điện thoại",
        href: "https://iaa.uk.net/chuyen-muc/dien-thoai/",
      },
      { label: "Laptop", href: "https://iaa.uk.net/chuyen-muc/laptop/" },
      { label: "Phần mềm", href: "https://iaa.uk.net/chuyen-muc/phan-mem/" },
    ],
  },
  {
    label: "Tài Chính",
    href: "https://iaa.uk.net/chuyen-muc/tai-chinh/",
    children: [
      { label: "Mua sắm", href: "https://iaa.uk.net/chuyen-muc/mua-sam/" },
      {
        label: "Tiết kiệm",
        href: "https://iaa.uk.net/chuyen-muc/tiet-kiem/",
      },
      {
        label: "Kinh doanh",
        href: "https://iaa.uk.net/chuyen-muc/kinh-doanh/",
      },
    ],
  },
  {
    label: "Xe Cộ",
    href: "https://iaa.uk.net/chuyen-muc/xe-co/",
    children: [
      { label: "Ô tô", href: "https://iaa.uk.net/chuyen-muc/o-to/" },
      { label: "Xe máy", href: "https://iaa.uk.net/chuyen-muc/xe-may/" },
      { label: "Phụ kiện", href: "https://iaa.uk.net/chuyen-muc/phu-kien/" },
    ],
  },
  {
    label: "Du Lịch",
    href: "https://iaa.uk.net/chuyen-muc/du-lich/",
    children: [
      { label: "Địa điểm", href: "https://iaa.uk.net/chuyen-muc/dia-diem/" },
      { label: "Resort", href: "https://iaa.uk.net/chuyen-muc/resort/" },
      { label: "Khách sạn", href: "https://iaa.uk.net/chuyen-muc/khach-san/" },
      {
        label: "Kinh nghiệm",
        href: "https://iaa.uk.net/chuyen-muc/kinh-nghiem/",
      },
    ],
  },
  {
    label: "Ẩm Thực",
    href: "https://iaa.uk.net/chuyen-muc/am-thuc/",
    children: [
      {
        label: "Review quán ăn",
        href: "https://iaa.uk.net/chuyen-muc/review-quan-an/",
      },
      { label: "Công thức", href: "https://iaa.uk.net/chuyen-muc/cong-thuc/" },
      { label: "Đặc sản", href: "https://iaa.uk.net/chuyen-muc/dac-san/" },
    ],
  },
  {
    label: "Review",
    href: "https://iaa.uk.net/chuyen-muc/review/",
    children: [
      {
        label: "Thương hiệu",
        href: "https://iaa.uk.net/chuyen-muc/thuong-hieu/",
      },
      { label: "Sản phẩm", href: "https://iaa.uk.net/chuyen-muc/san-pham/" },
      { label: "Dịch vụ", href: "https://iaa.uk.net/chuyen-muc/dich-vu/" },
      { label: "So sánh", href: "https://iaa.uk.net/chuyen-muc/so-sanh/" },
    ],
  },
];

export const heroLeadPost: IaaPost = {
  title: "Ớt Chìa Vôi Quảng Trị – Thứ gia vị làm nao lòng người đi xa",
  href: "https://iaa.uk.net/ot-chia-voi-quang-tri-thu-gia-vi-lam-nao-long-nguoi-di-xa/",
  image: "/images/iaa/ot-chia-voi-quan-tri.jpg",
  alt: "",
  excerpt:
    "(DLQT) – Ớt đối với người dân miền Trung nói chung và người Quảng Trị nói riêng là một gia vị hết sức quen thuộc, xuất hiện hằng ngày...",
};

export const heroMiniPosts: IaaPost[] = [
  {
    title: "Top 9 cửa hàng thu mua Laptop cũ giá cao, uy tín tại TPHCM",
    href: "https://iaa.uk.net/thu-mua-laptop-cu-gia-cao-tphcm/",
    image: "/images/iaa/2ndland-600x400.jpg",
    alt: "2ndland",
  },
  {
    title: "Top 8 cửa hàng bán Macbook cũ uy tín, giá rẻ tại TPHCM",
    href: "https://iaa.uk.net/shop-ban-macbook-cu-uy-tin-tphcm/",
    image: "/images/iaa/shop-ban-macbook-cu-uy-tin-4-600x400.jpg",
    alt: "FPT Shop",
  },
  {
    title: "Top 10 cửa hàng thu mua Macbook cũ giá cao tại TPHCM",
    href: "https://iaa.uk.net/thu-mua-macbook-cu-gia-cao-tphcm/",
    image: "/images/iaa/thu-mua-macbook-cu-gia-cao-1-600x400.jpg",
    alt: "thu mua Macbook cũ giá cao",
  },
];

export const heroSidePost: IaaPost = {
  title: "Hướng dẫn xử lý lỗi Reset Counter trên iPhone cực đơn giản",
  href: "https://iaa.uk.net/loi-reset-counter-tren-iphone/",
  image: "/images/iaa/loi-reset-counter-tren-iphone-1-600x400.jpg",
  alt: "lỗi Reset Counter trên iPhone",
};

export const reviewPosts: IaaPost[] = [
  {
    title: "Top 3 cửa hàng sửa điện thoại iPhone uy tín tại Bình Tân",
    href: "https://iaa.uk.net/top-3-cua-hang-sua-iphone-uy-tin-tai-binh-tan/",
    image: "/images/iaa/Trung-Tam-Huy-Dung-Mobile-711x400.jpg",
    alt: "",
    excerpt:
      "Điện thoại iPhone của bạn bị hư hỏng và bạn không biết cửa hàng sửa...",
  },
  {
    title: "Top 9 cửa hàng thu mua Laptop cũ giá cao, uy tín tại TPHCM",
    href: "https://iaa.uk.net/thu-mua-laptop-cu-gia-cao-tphcm/",
    image: "/images/iaa/huy-dung-mobile-e1697060493856-665x400.jpeg",
    alt: "",
    excerpt: "Bạn đang cần tìm địa chỉ mua lại Laptop cũ, đâu là cửa hàng thu...",
  },
  {
    title: "Top 10 trung tâm sửa iPhone uy tín giá rẻ tại TP.HCM",
    href: "https://iaa.uk.net/top-10-cua-hang-sua-iphone-uy-tin-gia-re-tai-tp-hcm/",
    image: "/images/iaa/dien-thoai-vui-600x400.jpg",
    alt: "",
    excerpt: "iPhone của bạn bị lỗi không sử dụng được và bạn không biết cửa hàng...",
  },
  {
    title: "Top 10 địa chỉ cửa hàng sửa iPad Uy tín giá rẻ tại TPHCM",
    href: "https://iaa.uk.net/top-10-dia-chi-sua-ipad-uy-tin-gia-re-tai-tphcm/",
    image: "/images/iaa/sua-ipad--601x400.jpeg",
    alt: "",
    excerpt: "iPad của bạn bị lỗi và bạn không biết cửa hàng sửa chữa iPad ở...",
  },
];

export const technologyPosts: IaaPost[] = [
  {
    title: "12 bước kiểm tra Macbook khi mua cũ để tránh rủi ro",
    href: "https://iaa.uk.net/kiem-tra-macbook-khi-mua-cu/",
    image: "/images/iaa/kiem-tra-macbook-khi-mua-cu-1-600x400.jpg",
    alt: "kiểm tra Macbook khi mua cũ",
    date: { day: "30", month: "Th5" },
    excerpt:
      "Kiểm tra MacBook khi mua cũ không dừng lại ở việc soi những vết trầy...",
  },
  {
    title: "Cách kiểm tra Macbook Bypass (iCloud ẩn) khi mua Macbook Cũ",
    href: "https://iaa.uk.net/cach-kiem-tra-macbook-bypass/",
    image: "/images/iaa/cach-kiem-tra-macbook-bypass-1-600x400.jpg",
    alt: "cách kiểm tra Macbook Bypass",
    date: { day: "28", month: "Th5" },
    excerpt:
      "Nắm rõ cách kiểm tra MacBook Bypass khi tìm mua MacBook cũ sẽ đảm bảo...",
  },
  {
    title: "Các trung tâm bảo hành Apple chính hãng uỷ quyền tại TPHCM",
    href: "https://iaa.uk.net/danh-sach-cac-trung-tam-bao-hanh-apple-tai-tphcm/",
    image: "/images/iaa/apple-care-store-603x400.webp",
    alt: "",
    date: { day: "13", month: "Th4" },
    excerpt:
      "Nếu bạn đang sử dụng các sản phẩm của Apple như iPhone, iPad, MacBook và...",
  },
  {
    title: "iPhone Bị Đơ Màn Hình Cảm Ứng: Nguyên Nhân và Cách Khắc Phục",
    href: "https://iaa.uk.net/iphone-bi-do-man-hinh-cam-ung-nguyen-nhan-va-cach-khac-phuc/",
    image: "/images/iaa/iphone-do-cam-ung-600x400.jpg",
    alt: "",
    date: { day: "06", month: "Th4" },
    excerpt:
      "iPhone bị đơ màn hình cảm ứng là lỗi xảy ra khiến cho iPhone của...",
  },
  {
    title: "Nguyên nhân và cách sửa iPhone bị mất tiếng loa ngoài",
    href: "https://iaa.uk.net/nguyen-nhan-va-cach-sua-iphone-bi-mat-tieng-loa-ngoai/",
    image: "/images/iaa/iPhone-bi-mat-tieng-600x400.jpg",
    alt: "",
    date: { day: "11", month: "Th2" },
    excerpt:
      "Khi bạn đang tận hưởng một bản nhạc yêu thích hoặc đang tham gia cuộc...",
  },
  {
    title: "Cách Xử Lý iPhone Bị Dính Nước Vào Màn Hình",
    href: "https://iaa.uk.net/cach-xu-ly-iphone-bi-dinh-nuoc-vao-man-hinh/",
    image: "/images/iaa/nuoc-do-len-man-hinh-iphone-600x400.jpg",
    alt: "",
    date: { day: "11", month: "Th2" },
    excerpt:
      "Khi một chiếc iPhone không may bị dính nước vào màn hình, nó có thể...",
  },
];

export const categoryTechnologyPosts: IaaPost[] = [
  {
    title: "Top 3 cửa hàng sửa điện thoại iPhone uy tín tại Bình Tân",
    href: "https://iaa.uk.net/top-3-cua-hang-sua-iphone-uy-tin-tai-binh-tan/",
    image: "/images/iaa/Trung-Tam-Huy-Dung-Mobile-711x400.jpg",
    alt: "",
    date: { day: "15", month: "Th3" },
    excerpt: "Điện thoại iPhone của bạn bị hư hỏng và bạn không biết cửa hàng sửa...",
  },
  {
    title: "Xử lý dứt điểm iPhone báo cuộc gọi bị hủy liên tục",
    href: "https://iaa.uk.net/iphone-bao-cuoc-goi-bi-huy/",
    image: "/images/iaa/iphone-bao-cuoc-goi-bi-huy-1-600x400.jpg",
    alt: "iPhone báo cuộc gọi bị hủy",
    date: { day: "23", month: "Th1" },
    excerpt: "Tại sao iPhone báo cuộc gọi bị hủy liên tục dù cột sóng vẫn đang...",
  },
  {
    title: "iPhone bị nứt mặt kính có ảnh hưởng đến cảm ứng không?",
    href: "https://iaa.uk.net/iphone-bi-nut-mat-kinh/",
    image: "/images/iaa/iphone-bi-nut-mat-kinh-1-600x400.jpg",
    alt: "iPhone bị nứt mặt kính",
    date: { day: "22", month: "Th1" },
    excerpt: "Bạn đang lo lắng khi iPhone bị nứt mặt kính sau một cú va đập...",
  },
  {
    title: "iPhone không nghe được loa trong: Nguyên nhân và cách xử lý",
    href: "https://iaa.uk.net/iphone-khong-nghe-duoc-loa-trong/",
    image: "/images/iaa/iphone-khong-nghe-duoc-loa-trong-1-600x400.jpg",
    alt: "iPhone không nghe được loa trong",
    date: { day: "13", month: "Th1" },
    excerpt: "Tại sao chiếc iPhone không nghe được loa trong dù bạn đã tăng tối đa...",
  },
  {
    title: "Hướng dẫn xử lý lỗi Reset Counter trên iPhone cực đơn giản",
    href: "https://iaa.uk.net/loi-reset-counter-tren-iphone/",
    image: "/images/iaa/loi-reset-counter-tren-iphone-1-600x400.jpg",
    alt: "lỗi Reset Counter trên iPhone",
    date: { day: "12", month: "Th1" },
    excerpt: "Đang trận game căng thẳng hay cuộc họp quan trọng mà máy bỗng tắt lịm...",
  },
  {
    title: "Lỗi iPhone 7 mất vi trình modem gây mất sóng xử lý thế nào?",
    href: "https://iaa.uk.net/iphone-7-mat-vi-trinh-modem/",
    image: "/images/iaa/iphone-7-mat-vi-trinh-modem-1-600x400.jpg",
    alt: "iPhone 7 mất vi trình modem",
    date: { day: "11", month: "Th1" },
    excerpt: "iPhone 7 mất vi trình modem khiến điện thoại của bạn bỗng chốc trở thành...",
  },
  {
    title: "Lỗi iPhone bị sọc tai thỏ có cần thay màn hình không?",
    href: "https://iaa.uk.net/iphone-bi-soc-tai-tho/",
    image: "/images/iaa/iphone-bi-soc-tai-tho-1-600x400.jpg",
    alt: "iPhone bị sọc tai thỏ",
    date: { day: "11", month: "Th1" },
    excerpt: "Hiện tượng iPhone bị sọc tai thỏ là một trong những sự cố hiển thị...",
  },
  {
    title: "Nguyên nhân iPhone khởi động lại liên tục và cách khắc phục",
    href: "https://iaa.uk.net/iphone-khoi-dong-lai-lien-tuc/",
    image: "/images/iaa/iphone-khoi-dong-lai-lien-tuc-1-600x400.jpg",
    alt: "iPhone khởi động lại liên tục",
    date: { day: "07", month: "Th1" },
    excerpt: "iPhone khởi động lại liên tục là lỗi khiến nhiều người dùng lo lắng vì...",
  },
  {
    title: "Sửa iPhone bị đen màn hình mà vẫn có tiếng như thế nào?",
    href: "https://iaa.uk.net/iphone-bi-den-man-hinh-ma-van-co-tieng/",
    image: "/images/iaa/iphone-bi-den-man-hinh-ma-van-co-tieng-1-600x400.jpg",
    alt: "iPhone bị đen màn hình mà vẫn có tiếng",
    date: { day: "07", month: "Th1" },
    excerpt: "Bạn đang gặp tình trạng iPhone bị đen màn hình mà vẫn có tiếng du...",
  },
  {
    title: "Sửa lỗi camera iPhone bị mờ không lấy nét được cực nhanh",
    href: "https://iaa.uk.net/camera-iphone-bi-mo-khong-lay-net-duoc/",
    image: "/images/iaa/camera-iphone-bi-mo-khong-lay-net-duoc-1-600x400.jpg",
    alt: "Camera iPhone bị mờ không lấy nét được",
    date: { day: "03", month: "Th1" },
    excerpt: "Camera iPhone bị mờ không lấy nét được là lỗi khiến nhiều người dùng tụt...",
  },
];
