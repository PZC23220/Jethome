package com.newsjet.jethome.dao.mapper;

import com.newsjet.jethome.dao.entity.NewsSpecialTopic;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

public interface NewsSpecialTopicMapper {
    @Insert({
            "insert into news_special_topic (id, title, ",
            "subtitle, cid, create_time, ",
            "imgs, bg_img, detail_desc, ",
            "pos, keyword_inclusion, ",
            "keyword_exclusion, show_type, ",
            "include_news, is_toplist, ",
            "toplist_pos, active)",
            "values (#{id,jdbcType=INTEGER}, #{title,jdbcType=VARCHAR}, ",
            "#{subtitle,jdbcType=VARCHAR}, #{cid,jdbcType=VARCHAR}, #{createTime,jdbcType=TIMESTAMP}, ",
            "#{imgs,jdbcType=VARCHAR}, #{bgImg,jdbcType=VARCHAR}, #{detailDesc,jdbcType=VARCHAR}, ",
            "#{pos,jdbcType=INTEGER}, #{keywordInclusion,jdbcType=VARCHAR}, ",
            "#{keywordExclusion,jdbcType=VARCHAR}, #{showType,jdbcType=INTEGER}, ",
            "#{includeNews,jdbcType=INTEGER}, #{isToplist,jdbcType=INTEGER}, ",
            "#{toplistPos,jdbcType=INTEGER}, #{active,jdbcType=INTEGER})"
    })
    int insert(NewsSpecialTopic record);

    @Select({
            "select",
            "id, title, subtitle, cid, create_time, imgs, bg_img, detail_desc, pos, keyword_inclusion, ",
            "keyword_exclusion, show_type, include_news, is_toplist, toplist_pos, active",
            "from news_special_topic"
    })
    @Results({
            @Result(column = "id", property = "id", jdbcType = JdbcType.INTEGER),
            @Result(column = "title", property = "title", jdbcType = JdbcType.VARCHAR),
            @Result(column = "subtitle", property = "subtitle", jdbcType = JdbcType.VARCHAR),
            @Result(column = "cid", property = "cid", jdbcType = JdbcType.VARCHAR),
            @Result(column = "create_time", property = "createTime", jdbcType = JdbcType.TIMESTAMP),
            @Result(column = "imgs", property = "imgs", jdbcType = JdbcType.VARCHAR),
            @Result(column = "bg_img", property = "bgImg", jdbcType = JdbcType.VARCHAR),
            @Result(column = "detail_desc", property = "detailDesc", jdbcType = JdbcType.VARCHAR),
            @Result(column = "pos", property = "pos", jdbcType = JdbcType.INTEGER),
            @Result(column = "keyword_inclusion", property = "keywordInclusion", jdbcType = JdbcType.VARCHAR),
            @Result(column = "keyword_exclusion", property = "keywordExclusion", jdbcType = JdbcType.VARCHAR),
            @Result(column = "show_type", property = "showType", jdbcType = JdbcType.INTEGER),
            @Result(column = "include_news", property = "includeNews", jdbcType = JdbcType.INTEGER),
            @Result(column = "is_toplist", property = "isToplist", jdbcType = JdbcType.INTEGER),
            @Result(column = "toplist_pos", property = "toplistPos", jdbcType = JdbcType.INTEGER),
            @Result(column = "active", property = "active", jdbcType = JdbcType.INTEGER)
    })
    List<NewsSpecialTopic> selectAll();

    @Select({
            "select *",
            "from news_special_topic",
            "where title = #{title}"
    })
    @Results({
            @Result(column = "id", property = "id", jdbcType = JdbcType.INTEGER),
            @Result(column = "title", property = "title", jdbcType = JdbcType.VARCHAR),
            @Result(column = "subtitle", property = "subtitle", jdbcType = JdbcType.VARCHAR),
            @Result(column = "cid", property = "cid", jdbcType = JdbcType.VARCHAR),
            @Result(column = "create_time", property = "createTime", jdbcType = JdbcType.TIMESTAMP),
            @Result(column = "imgs", property = "imgs", jdbcType = JdbcType.VARCHAR),
            @Result(column = "bg_img", property = "bgImg", jdbcType = JdbcType.VARCHAR),
            @Result(column = "detail_desc", property = "detailDesc", jdbcType = JdbcType.VARCHAR),
            @Result(column = "pos", property = "pos", jdbcType = JdbcType.INTEGER),
            @Result(column = "keyword_inclusion", property = "keywordInclusion", jdbcType = JdbcType.VARCHAR),
            @Result(column = "keyword_exclusion", property = "keywordExclusion", jdbcType = JdbcType.VARCHAR),
            @Result(column = "show_type", property = "showType", jdbcType = JdbcType.INTEGER),
            @Result(column = "include_news", property = "includeNews", jdbcType = JdbcType.INTEGER),
            @Result(column = "is_toplist", property = "isToplist", jdbcType = JdbcType.INTEGER),
            @Result(column = "toplist_pos", property = "toplistPos", jdbcType = JdbcType.INTEGER),
            @Result(column = "active", property = "active", jdbcType = JdbcType.INTEGER)
    })
    NewsSpecialTopic selectByTitle(@Param("title") String title);

    @Select({
            "select *",
            "from news_special_topic",
            "where id = #{id}"
    })
    @Results({
            @Result(column = "id", property = "id", jdbcType = JdbcType.INTEGER),
            @Result(column = "title", property = "title", jdbcType = JdbcType.VARCHAR),
            @Result(column = "subtitle", property = "subtitle", jdbcType = JdbcType.VARCHAR),
            @Result(column = "cid", property = "cid", jdbcType = JdbcType.VARCHAR),
            @Result(column = "create_time", property = "createTime", jdbcType = JdbcType.TIMESTAMP),
            @Result(column = "imgs", property = "imgs", jdbcType = JdbcType.VARCHAR),
            @Result(column = "bg_img", property = "bgImg", jdbcType = JdbcType.VARCHAR),
            @Result(column = "detail_desc", property = "detailDesc", jdbcType = JdbcType.VARCHAR),
            @Result(column = "pos", property = "pos", jdbcType = JdbcType.INTEGER),
            @Result(column = "keyword_inclusion", property = "keywordInclusion", jdbcType = JdbcType.VARCHAR),
            @Result(column = "keyword_exclusion", property = "keywordExclusion", jdbcType = JdbcType.VARCHAR),
            @Result(column = "show_type", property = "showType", jdbcType = JdbcType.INTEGER),
            @Result(column = "include_news", property = "includeNews", jdbcType = JdbcType.INTEGER),
            @Result(column = "is_toplist", property = "isToplist", jdbcType = JdbcType.INTEGER),
            @Result(column = "toplist_pos", property = "toplistPos", jdbcType = JdbcType.INTEGER),
            @Result(column = "active", property = "active", jdbcType = JdbcType.INTEGER)
    })
    NewsSpecialTopic selectByPrimaryKey(@Param("id") Integer id);
}