import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
const data = [
  {
    id: 1,
    name: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    imageUrl: require('../../images/dnt.jpg'),
    des:
      'Đắc nhân tâm (tên tiếng Anh là How to Win Friends and Influence People) là một quyển sách tự giúp bản thân, do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được dịch ra các thứ tiếng và bán trên khắp thế giới. Quyển sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống. Không còn nữa khái niệm giới hạn Đắc Nhân Tâm là nghệ thuật thu phục lòng người, là làm cho tất cả mọi người yêu mến mình. Đắc nhân tâm và cái Tài trong mỗi người chúng ta. Đắc Nhân Tâm trong ý nghĩa đó cần được thụ đắc bằng sự hiểu rõ bản thân, thành thật với chính mình, hiểu biết và quan tâm đến những người xung quanh để nhìn ra và khơi gợi những tiềm năng ẩn khuất nơi họ, giúp họ phát triển lên một tầm cao mới. Đây chính là nghệ thuật cao nhất về con người và chính là ý nghĩa sâu sắc nhất đúc kết từ những nguyên tắc vàng của Dale Carnegie. Quyển sách đã từng mang đến thành công và hạnh phúc cho hàng triệu người trên khắp thế giới. Và bây giờ các bạn và tôi cùng bắt đầu phân tích và tìm hiểu nó !',
    chapters: {
      chapter1: {
        chapterId: 1,
        chapterName: 'Đắc Nhân Tâm - Phần 1',
        audioUrl: 'http://techslides.com/demos/samples/sample.mp3',
      },
      chapter2: {
        chapterId: 2,
        chapterName: 'Đắc Nhân Tâm - Phần 2',
        audioUrl:
          'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
      },
      chapter3: {
        chapterId: 3,
        chapterName: 'Đắc Nhân Tâm - Phần 3',
        audioUrl:
          'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
      },
      chapter4: {
        chapterId: 4,
        chapterName: 'Đắc Nhân Tâm - Phần 4',
        audioUrl:
          'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
      },
      chapter5: {
        chapterId: 5,
        chapterName: 'Đắc Nhân Tâm - Phần 5',
        audioUrl:
          'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
      },
    },
    url:
      'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
    duration: 143,
  },
  {
    id: 2,
    name: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    imageUrl: require('../../images/dnt.jpg'),
    des:
      'Đắc nhân tâm (tên tiếng Anh là How to Win Friends and Influence People) là một quyển sách tự giúp bản thân, do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được dịch ra các thứ tiếng và bán trên khắp thế giới. Quyển sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống. Không còn nữa khái niệm giới hạn Đắc Nhân Tâm là nghệ thuật thu phục lòng người, là làm cho tất cả mọi người yêu mến mình. Đắc nhân tâm và cái Tài trong mỗi người chúng ta. Đắc Nhân Tâm trong ý nghĩa đó cần được thụ đắc bằng sự hiểu rõ bản thân, thành thật với chính mình, hiểu biết và quan tâm đến những người xung quanh để nhìn ra và khơi gợi những tiềm năng ẩn khuất nơi họ, giúp họ phát triển lên một tầm cao mới. Đây chính là nghệ thuật cao nhất về con người và chính là ý nghĩa sâu sắc nhất đúc kết từ những nguyên tắc vàng của Dale Carnegie. Quyển sách đã từng mang đến thành công và hạnh phúc cho hàng triệu người trên khắp thế giới. Và bây giờ các bạn và tôi cùng bắt đầu phân tích và tìm hiểu nó !',
    chapters: {
      chapter1: 'Đắc Nhân Tâm - Phần 1',
      chapter2: 'Đắc Nhân Tâm - Phần 2',
      chapter3: 'Đắc Nhân Tâm - Phần 3',
      chapter4: 'Đắc Nhân Tâm - Phần 4',
      chapter5: 'Đắc Nhân Tâm - Phần 5',
    },
    url: require('../../tracks/dnt.mp3'),
    duration: 77,
  },
  {
    id: 3,
    name: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    imageUrl: require('../../images/dnt.jpg'),
    des:
      'Đắc nhân tâm (tên tiếng Anh là How to Win Friends and Influence People) là một quyển sách tự giúp bản thân, do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được dịch ra các thứ tiếng và bán trên khắp thế giới. Quyển sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống. Không còn nữa khái niệm giới hạn Đắc Nhân Tâm là nghệ thuật thu phục lòng người, là làm cho tất cả mọi người yêu mến mình. Đắc nhân tâm và cái Tài trong mỗi người chúng ta. Đắc Nhân Tâm trong ý nghĩa đó cần được thụ đắc bằng sự hiểu rõ bản thân, thành thật với chính mình, hiểu biết và quan tâm đến những người xung quanh để nhìn ra và khơi gợi những tiềm năng ẩn khuất nơi họ, giúp họ phát triển lên một tầm cao mới. Đây chính là nghệ thuật cao nhất về con người và chính là ý nghĩa sâu sắc nhất đúc kết từ những nguyên tắc vàng của Dale Carnegie. Quyển sách đã từng mang đến thành công và hạnh phúc cho hàng triệu người trên khắp thế giới. Và bây giờ các bạn và tôi cùng bắt đầu phân tích và tìm hiểu nó !',
    chapters: {
      chapter1: 'Đắc Nhân Tâm - Phần 1',
      chapter2: 'Đắc Nhân Tâm - Phần 2',
      chapter3: 'Đắc Nhân Tâm - Phần 3',
      chapter4: 'Đắc Nhân Tâm - Phần 4',
      chapter5: 'Đắc Nhân Tâm - Phần 5',
    },
    url: require('../../tracks/dnt.mp3'),
    duration: 106,
  },
  {
    id: 4,
    name: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    imageUrl: require('../../images/dnt.jpg'),
    des:
      'Đắc nhân tâm (tên tiếng Anh là How to Win Friends and Influence People) là một quyển sách tự giúp bản thân, do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được dịch ra các thứ tiếng và bán trên khắp thế giới. Quyển sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống. Không còn nữa khái niệm giới hạn Đắc Nhân Tâm là nghệ thuật thu phục lòng người, là làm cho tất cả mọi người yêu mến mình. Đắc nhân tâm và cái Tài trong mỗi người chúng ta. Đắc Nhân Tâm trong ý nghĩa đó cần được thụ đắc bằng sự hiểu rõ bản thân, thành thật với chính mình, hiểu biết và quan tâm đến những người xung quanh để nhìn ra và khơi gợi những tiềm năng ẩn khuất nơi họ, giúp họ phát triển lên một tầm cao mới. Đây chính là nghệ thuật cao nhất về con người và chính là ý nghĩa sâu sắc nhất đúc kết từ những nguyên tắc vàng của Dale Carnegie. Quyển sách đã từng mang đến thành công và hạnh phúc cho hàng triệu người trên khắp thế giới. Và bây giờ các bạn và tôi cùng bắt đầu phân tích và tìm hiểu nó !',
    chapters: {
      chapter1: 'Đắc Nhân Tâm - Phần 1',
      chapter2: 'Đắc Nhân Tâm - Phần 2',
      chapter3: 'Đắc Nhân Tâm - Phần 3',
      chapter4: 'Đắc Nhân Tâm - Phần 4',
      chapter5: 'Đắc Nhân Tâm - Phần 5',
    },
    url: require('../../tracks/dnt.mp3'),
    duration: 71,
  },
  {
    id: 5,
    name: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    imageUrl: require('../../images/dnt.jpg'),
    des:
      'Đắc nhân tâm (tên tiếng Anh là How to Win Friends and Influence People) là một quyển sách tự giúp bản thân, do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được dịch ra các thứ tiếng và bán trên khắp thế giới. Quyển sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống. Không còn nữa khái niệm giới hạn Đắc Nhân Tâm là nghệ thuật thu phục lòng người, là làm cho tất cả mọi người yêu mến mình. Đắc nhân tâm và cái Tài trong mỗi người chúng ta. Đắc Nhân Tâm trong ý nghĩa đó cần được thụ đắc bằng sự hiểu rõ bản thân, thành thật với chính mình, hiểu biết và quan tâm đến những người xung quanh để nhìn ra và khơi gợi những tiềm năng ẩn khuất nơi họ, giúp họ phát triển lên một tầm cao mới. Đây chính là nghệ thuật cao nhất về con người và chính là ý nghĩa sâu sắc nhất đúc kết từ những nguyên tắc vàng của Dale Carnegie. Quyển sách đã từng mang đến thành công và hạnh phúc cho hàng triệu người trên khắp thế giới. Và bây giờ các bạn và tôi cùng bắt đầu phân tích và tìm hiểu nó !',
    chapters: {
      chapter1: 'Đắc Nhân Tâm - Phần 1',
      chapter2: 'Đắc Nhân Tâm - Phần 2',
      chapter3: 'Đắc Nhân Tâm - Phần 3',
      chapter4: 'Đắc Nhân Tâm - Phần 4',
      chapter5: 'Đắc Nhân Tâm - Phần 5',
    },
    url: require('../../tracks/dnt.mp3'),
    duration: 144,
  },
];

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  renderItem(item, navigation) {
    const {nav} = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          nav.navigate('BookDetail', {
            imageUrl: item.imageUrl,
            name: item.name,
            author: item.author,
            des: item.des,
            chapters: item.chapters,
            url: item.url,
            id: item.id,
            duration: item.duration,
          })
        }>
        <Image style={styles.flat} source={item.imageUrl} />
      </TouchableOpacity>
    );
  }
  render() {
    const {navigation} = this.props;
    return (
      <FlatList
        data={this.state.data}
        renderItem={({item}) => this.renderItem(item, navigation)}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  flat: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.4,
  },
});
export default Featured;
