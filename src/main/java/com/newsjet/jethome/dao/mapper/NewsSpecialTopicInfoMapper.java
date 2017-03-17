package com.newsjet.jethome.dao.mapper;


import com.newsjet.jethome.dao.entity.NewsSpecialTopicInfo;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface NewsSpecialTopicInfoMapper {
    int insert(NewsSpecialTopicInfo record);

    int insertSelective(NewsSpecialTopicInfo record);

    @Select("select news_id from news_special_topic_info;")
    List<String> selectAllNewsID();
}